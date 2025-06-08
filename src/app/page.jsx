"use client";

import { RiChatNewLine } from "react-icons/ri";
import { LuSendHorizontal } from "react-icons/lu";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

// components
import AddFriendForm from "./components/AddFriendForm";
import FriendList from "./components/FriendList";

export default function Home() {
  const [session, setSession] = useState();
  const [isAddFriend, setIsAddFriend] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/session");
      const data = await response.json();
      console.log(data);
      setSession(data);
    };

    fetchSession();
  }, []);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(session?.chatId);
      console.log("berhasil disalin");
    } catch (err) {
      console.log("gagal disalin");
    }
  };

  const addFriend = () => {
    setIsAddFriend(!isAddFriend);
  };

  return (
    <div className="w-full h-screen flex items-center space-x-[1rem] ">
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
              <div className="flex items-center space-x-[0.8rem] text-white mt-1">
                <span className="text-sm">{session?.chatId}</span>
                <span title="Copy Id" className="text-sm" onClick={copyId}>
                  <MdOutlineContentCopy />
                </span>
              </div>
              <span className="text-sm text-white opacity-80"></span>
            </div>
          </div>

          <div className="flex items-center space-x-[1.5rem]">
            <span>
              <IoMdNotificationsOutline
                title="Notification"
                className="cursor-pointer text text-xl"
              />
            </span>
            <span
              title="new chat"
              className="cursor-pointer"
              onClick={addFriend}
            >
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
            className="bg-[#3B374E] py-2 px-6 outline-none text-sm w-full rounded-full "
          />
          <button className="bg-[#9A85FB] p-3 rounded-full cursor-pointer">
            <LuSendHorizontal />
          </button>
        </div>
      </div>

      {/* conditional rendering */}
      {isAddFriend && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <AddFriendForm setIsAddFriend={setIsAddFriend} session={session} />
        </div>
      )}
    </div>
  );
}
