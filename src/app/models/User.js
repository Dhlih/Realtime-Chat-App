const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    unique: true,
    type: String,
  },
  password: String,
  chatId: {
    unique: true,
    type: String,
  },
  socketId: String,
  friends: [String],
});

module.exports = mongoose.models.users || mongoose.model("users", UserSchema);
