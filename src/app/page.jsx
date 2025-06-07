"use client";

import { RiChatNewLine } from "react-icons/ri";
import FriendList from "./components/FriendList";
import { LuSendHorizontal } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/session");
      const data = await response.json();
      console.log(data);
      setSession(data);
    };

    fetchSession();
  }, []);

  return (
    <div className="flex items-center space-x-[1rem] ">
      {/* left side */}
      <div className="sidebar h-screen bg-[#1B1923] p-5 space-y-[1.2rem] w-[25%]">
        {/* user profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[0.8rem] rounded-md">
            <div className="rounded-full w-10 h-10 bg-yellow-100"></div>
            <div>
              <span className="text-white block font-medium">
                {session?.username}
              </span>
              <span className="text-sm text-white opacity-80">
                {session?.chatId}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-[1.5rem]">
            <span title="new chat" className="cursor-pointer">
              <RiChatNewLine className="text-white " />
            </span>
          </div>
        </div>
        <input
          type="text"
          className="bg-[#0a0a14] rounded-full py-2 px-4 text-white text-sm outline-none w-full"
          placeholder="Search..."
        />
        {/* friend list */}
        <div className="space-y-[1.2rem] overflow-y-scroll max-h-[calc(100vh-150px)]">
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
          <FriendList />
        </div>
      </div>

      {/* right side */}
      <div className="h-screen w-[70%] flex flex-col p-4">
        <div className="flex items-center space-x-[0.8rem] rounded-md">
          <div className="rounded-full w-8 h-8 bg-yellow-100"></div>
          <span className="text-white">Ifad Yusuf</span>
        </div>

        {/* message input */}
        <div className="flex items-center space-x-[1rem] mt-auto text-white">
          <input
            type="text"
            className="bg-[#3B374E] p-2 outline-none text-sm w-full rounded-full "
          />
          <button className="bg-[#9A85FB] p-3 rounded-full cursor-pointer">
            <LuSendHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
}
