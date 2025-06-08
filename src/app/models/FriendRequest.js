const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
  fromChatId: String, // chat id
  toChatId: String, // chat id
  isAccepted: {
    type: Boolean,
    default: false,
  },
});

module.exports =
  mongoose.models.FriendRequest ||
  mongoose.model("FriendRequest", FriendRequestSchema);
