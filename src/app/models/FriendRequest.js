const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
  fromChatId: String, // chat id
  toChatId: String, // chat id
  isAccepted: Boolean,
});

module.exports =
  mongoose.models.FriendRequest ||
  mongoose.model("FriendRequest", FriendRequestSchema);
