"use server";

import { connectDB } from "../lib/mongodb";
import User from "../models/User";

export const createUser = async (formdata) => {
  try {
    await connectDB();

    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");

    if (!username || !email || !password) return;

    await User.create({ username, email, password });
    console.log("Berhasil membuat user");
  } catch (error) {
    console.log("Gagal membuat user", error);
  }
};

export const login = async (formdata) => {
  try {
    const email = formdata.get("email");
    const password = formdata.get("password");

    const user = await User.findOne({ email });

    console.log(user);

    if (!user) return;

    console.log(user.password, password);

    if (user.password === password) {
      console.log("Login berhasil");
      return user;
    } else {
      console.log("Password salah");
    }
  } catch (error) {
    console.log("Login gagal", error);
  }
};
