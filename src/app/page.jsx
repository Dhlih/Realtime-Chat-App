import { RiChatNewLine } from "react-icons/ri";
import FriendList from "./components/FriendList";
import { LuSendHorizontal } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex items-center space-x-[1rem] ">
      {/* left side */}
      <div className="sidebar h-screen bg-[#1B1923] p-5 space-y-[1.2rem] w-[25%]">
        {/* user profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[0.8rem] rounded-md">
            <div className="rounded-full w-8 h-8 bg-yellow-100"></div>
            <span className="text-white">Ifad Yusuf</span>
          </div>
          <span title="new chat" className="cursor-pointer">
            <RiChatNewLine className="text-white " />
          </span>
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
