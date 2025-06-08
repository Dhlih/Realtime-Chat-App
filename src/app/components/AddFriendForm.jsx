import { IoCloseOutline } from "react-icons/io5";
import { addFriend } from "../actions/chat";
import { useState } from "react";

const AddFriendForm = ({ session, setIsAddFriend }) => {
  const [toChatId, setToChatId] = useState();

  const sendFriendRequest = async () => {
    if (!session.chatId || !toChatId) return;

    try {
      await addFriend({
        fromChatId: session.chatId,
        toChatId: toChatId,
      });
      console.log(session.chatId, toChatId);
      setIsAddFriend(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#3B374E] rounded-lg shadow-lg p-5 w-[400px] space-y-[0.8rem]">
      <div className="flex items-center justify-between ">
        <h3 className="text-xl font-semibold">Add Friend</h3>
        <span
          title="Close"
          onClick={() => setIsAddFriend(false)}
          className="text-2xl cursor-pointer"
        >
          <IoCloseOutline />
        </span>
      </div>

      <div className="flex items-center space-x-[0.8rem]">
        <input
          type="text"
          className="w-full rounded-md py-2 px-3 bg-none bg-[#1B1923] text-sm outline-none"
          placeholder="Enter Id"
          onChange={(e) => {
            setToChatId(e.target.value);
          }}
        />

        <button
          className="w-[20%] rounded-md p-2 bg-[#1B1923] text-sm cursor-pointer hover:bg-[#1B1923]/70"
          onClick={sendFriendRequest}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddFriendForm;
