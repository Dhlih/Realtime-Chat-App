"use server";

import { connectDB } from "../lib/mongodb";
import User from "../models/User";
import { cookies } from "next/headers";
import { nanoid } from "nanoid";

export const createUser = async (formdata) => {
  try {
    await connectDB();

    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");

    let unique = false;
    let chatId = "";

    while (!unique) {
      const existing = await User.findOne({ chatId });
      chatId = nanoid(5);

      if (!existing) {
        unique = true;
      }
    }

    if (!username || !email || !password) return;

    await User.create({ username, email, password, chatId });

    console.log("Berhasil membuat user");
  } catch (error) {
    console.log("Gagal membuat user", error);
  }
};

export const login = async (formdata) => {
  try {
    await connectDB();

    const email = formdata.get("email");
    const password = formdata.get("password");
    const cookies = await cookies();

    if (!email && !password) return;

    const user = await User.findOne({ email });

    if (!user) console.log("tidak ada user");

    if (user.password !== password) console.log("password salah");

    // buat cookies
    cookies.set(
      "session",
      JSON.stringify({
        username: user.username,
        id: user._id,
        chatId: user.chatId,
      }),
      {
        httpOnly: true,
        path: "/",
        secure: true,
        maxAge: 60 * 60 * 24,
      }
    );
    console.log("berhasil login");
    return true;
  } catch (error) {
    console.log("Login gagal", error);
  }
};
