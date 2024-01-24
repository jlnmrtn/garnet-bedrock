import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Header({ signOut, user }: WithAuthenticatorProps) {
  return (
    <header className="w-full mt-3 flex justify-between items-center p-8 text-2xl border border-violet-400 shadow-lg fixed top-0 z-50 overflow-auto bg-zinc-200">
      <div className="font-mono">Easy Rider for Lille</div>

      <div className="flex flex-col justify-center items-center space-y-3">
        <span className="text-violet-500 font-mono">
          🤖 Chatbot Powered by Garnet Framework and AWS Bedrock agents
        </span>
        <Separator orientation="horizontal" className="bg-slate-950" />
        <Link
          href="https://garnet-framework.dev/"
          className="text-cyan-600 text-sm"
        >
          Find More About Garnet
        </Link>
      </div>

      <div
        className=" flex flex-col justify-center items-center cursor-pointer font-mono space-y-2"
        onClick={signOut}
      >
        <AiOutlineUser
          className="text-cyan-500 hover:bg-violet-600 active:bg-violet-700  rounded-full focus:outline-none focus:ring focus:ring-violet-300"
          size={50}
        />
        <p>{user?.username}</p>
      </div>
    </header>
  );
}
