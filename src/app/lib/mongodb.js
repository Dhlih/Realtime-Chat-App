const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chat-app");
    console.log("Terhubung ke MongoDB");
  } catch (error) {
    console.log("Gagal terhubung ke MongoDB", error);
  }
};
