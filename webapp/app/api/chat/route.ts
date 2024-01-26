import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
  ResponseStream,
} from "@aws-sdk/client-bedrock-agent-runtime";
import {
  StreamingTextResponse,
} from "ai";
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';


// IMPORTANT! Set the runtime to edge
export const runtime = "edge";



export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  //console.log(await req.json())
  
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => fetchAuthSession(contextSpec)
  });

  const { messages, end } = await req.json();
  
  const bedrockClient = new BedrockAgentRuntimeClient({
    region: "us-east-1",
    credentials: user.credentials,
  });

  const command = {
    // InvokeAgentRequest
    agentId: "FRG2F4RLBS", // required
    agentAliasId: "YXJSH5IQ9L", // required
    sessionId: user.userSub, // required
    endSession: end,
    enableTrace: false,
    inputText: messages[messages.length - 1].content, // required
  };



  // Ask Claude for a streaming chat completion given the prompt
  const bedrockResponse = await bedrockClient.send(
    new InvokeAgentCommand(command)
  );

  const event_stream = bedrockResponse.completion;


  function iteratorToStream(iterator: any) {
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next();

        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      },
    });
  }

  function sleep(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const encoder = new TextEncoder();

  async function* makeIterator(event_stream: AsyncIterable<ResponseStream>) {
    for await (const event of event_stream) {
      if (event.chunk && event.chunk.bytes) {
        //console.log(event.chunk.bytes);
        const chunk = Buffer.from(event.chunk.bytes).toString("utf-8");
        yield encoder.encode(chunk);
        await sleep(200);
      }
    }
  }

  if (typeof event_stream === "undefined") {
    return new Response("No response", { status: 500 });
  } 
  const iterator = makeIterator(event_stream);
  const stream = iteratorToStream(iterator);

  return new StreamingTextResponse(stream);
}
