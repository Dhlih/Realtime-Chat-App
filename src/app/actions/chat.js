"use server";

import FriendRequest from "../models/FriendRequest";
import { connectDB } from "../lib/mongodb";

export const addFriend = async ({ fromChatId, toChatId }) => {
  try {
    await connectDB();

    console.log(fromChatId, toChatId);

    if (!fromChatId || !toChatId) {
      console.log("tidak ada chat id dan to chat id");
      return;
    }

    await FriendRequest.create({ fromChatId, toChatId });
  } catch (error) {
    console.log("Gagal membuat friend request");
  }
};
