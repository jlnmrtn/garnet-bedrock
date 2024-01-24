import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GiBrain } from 'react-icons/gi'

interface IProps {
    id: string
    role: string
    content: string
}

const Chat: React.FC<IProps> = ({ id , role, content }) =>  {
  return (
    <div
              key={id}
              className="flex items-center justify-center space-x-4"
            >
              {role === "user" ? (
                <AiOutlineUser size="70" className="text-3xl text-cyan-500" />
              ) : (
                <GiBrain size="70" className="text-3xl text-fuchsia-500" />
              )}{" "}
              <div
                className={`p-4 text-lg font-mono overflow-auto border border-solid rounded-xl max-w-3xl shadow-xl bg-gradient-to-br ${
                  role === "user"
                    ? "from-fuchsia-300 to-cyan-300"
                    : "from-violet-200 to-pink-200"
                }`}
              >
                {content}
              </div>
            </div>
  )
}

export default Chat