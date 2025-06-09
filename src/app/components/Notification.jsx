import React from "react";

const Notification = ({ notifications }) => {
  return (
    <div className="absolute top-18 p-4 left-5 w-[250px] bg-[#3B374E] rounded-lg">
      <h3 className="font-medium">Notifications</h3>
      <div className="bg-[#3B374E] flex items-center space-x-[0.8rem] rounded-md p-2">
        <div className="rounded-full w-8 h-8 bg-yellow-100"></div>

        {notifications.map((notification, i) => (
          <div key={i}>
            <span className="text-white text-sm">
              {notification?.fromChatId} added you
            </span>
            <div className="flex items-center space-x-[1rem] mt-[0.5rem]">
              <button className="bg-green-400 px-3 p-1 rounded-md text-sm cursor-pointer">
                Accept
              </button>
              <button className="bg-red-400 px-3 py-1 rounded-md text-sm cursor-pointer">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
