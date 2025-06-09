"use server";

import { connectDB } from "../lib/mongodb";
import User from "../models/User";
import { cookies } from "next/headers";
import { nanoid } from "nanoid";

export const createUser = async ({ username, email, password }) => {
  try {
    await connectDB();

    let unique = false;
    let chatId = "";

    const existingUser = await User.findOne({ email });

    if (existingUser) return;

    while (!unique) {
      const existing = await User.findOne({ chatId });
      chatId = nanoid(5);

      if (!existing) unique = true;
    }

    if (!username || !email || !password) return;

    await User.create({ username, email, password, chatId });

    console.log("Berhasil membuat user");
    return true;
  } catch (error) {
    console.log("Gagal membuat user", error);
  }
};

export const login = async ({ email, password }) => {
  try {
    await connectDB();

    const cookieStore = await cookies();

    if (!email && !password) return;

    const user = await User.findOne({ email });

    console.log(email);

    console.log("user login :", user);

    if (!user) console.log("tidak ada user");

    if (user.password !== password) console.log("password salah");

    // create cookie
    cookieStore.set(
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

export const logout = async () => {
  const cookieStore = await cookies();

  try {
    cookieStore.delete("session");
    return true;
  } catch (error) {
    console.log(error);
  }
};
