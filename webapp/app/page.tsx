"use client";

import { useChat } from "ai/react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PacmanLoader } from "react-spinners";
import { GiBrain } from "react-icons/gi";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import Chat from "@/components/chat";

import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { useState } from "react";
import { BsSignStopFill } from "react-icons/bs";
Amplify.configure(config, { ssr: true });

function HomePage({ signOut, user }: WithAuthenticatorProps) {
  const [endSession, setEndSession] = useState<boolean>(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput, setMessages } =
  useChat({body : {end : endSession}});

  const resetChat = () => {
    setEndSession(true),
    setInput("BYE"),
    setMessages([])
  }

  return (
    <div className="relative min-h-screen bg-slate-200 overflow-hidden flex flex-col  justify-center">
      <Header signOut={signOut} user={user}  />

      {isLoading && (
        <div className="absolute h-full w-full bottom-0 backdrop-blur-sm z-30 flex justify-center items-center ease-out duration-300">
          <PacmanLoader color="#EE82EE" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center items-center m-auto ">
        <div className="flex-1 flex flex-col items-start m-auto space-y-9 min-w-fit justify-center">
          {messages.length == 0 && (
            <div className="flex items-center justify-center space-x-4 ">
              <GiBrain size="70" className="text-3xl text-cyan-500" />
              <div className="text-lg  font-mono p-4 overflow-auto border border-solid rounded-xl max-w-3xl shadow-xl bg-gradient-to-br from-violet-200 to-pink-200 ">
                Helloooo !! I am a super Dumb Guy ask me questions about Bikes
              </div>
            </div>
          )}
          {messages.map((m) => (
            <Chat content={m.content} key={m.id} id={m.id} role={m.role} />
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex space-x-3 justify-center items-center my-10 "
      >
        <Input
          className="border max-w-3xl border-gray-100 shadow-xl py-8 text-xl text-bold rounded-2xl font-mono "
          value={input}
          onChange={handleInputChange}
          placeholder="I am in Lille Europe and I need a bike."
        />
        <Button variant="ghost" className="p-8" type="submit" onClick={() => setEndSession(false)}>
          <TbSquareRoundedChevronsRightFilled size="80" color="purple" />
        </Button>
        
        <Button variant="ghost" className="p-8" type="submit" onClick={() => resetChat()}>
          <BsSignStopFill size="70" color="purple" />
        </Button>

        </form>
    </div>
  );
}

export default withAuthenticator(HomePage);
