"use server";

import FriendRequest from "../models/FriendRequest";
import { connectDB } from "../lib/mongodb";
import { ObjectId } from "mongodb";

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

export const searchNotifications = async ({ userChatId }) => {
  try {
    const notifications = await FriendRequest.find({
      fromChatId: userChatId,
    })
      .select("-_id")
      .lean();
    return notifications;
  } catch (error) {
    console.log(error);
  }
};

export const responseAddFriend = async ({ toChatId, isAccepted }) => {
  try {
    const response = await FriendRequest.updateOne(
      { _id: new ObjectId(toChatId) },
      { $set: { isAccepted } }
    );
    return response;
  } catch (error) {
    console.log(Error);
  }
};
