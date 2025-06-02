import React from "react";
import Link from "next/link";
import { login } from "@/app/actions/user";

const Login = () => {
  return (
    <div className="bg-[#323140]/80 h-screen flex items-center justify-center text-white">
      <div className="bg-[#0A0A14] rounded-xl p-[2rem] 2xl:p-[4rem] w-[23%] 2xl:h-[60%]">
        <h1 className="mb-[1.8rem] text-center text-2xl">Log In</h1>
        <form action={login} className="flex flex-col space-y-[1.8rem]">
          <input
            type="email"
            className="border-2 border-[#342479] rounded-md p-2 text-sm shadow-md shadow-[#342479]/50"
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            className="border-2 border-[#342479] rounded-md p-2 text-sm shadow-md shadow-[#342479]/50"
            placeholder="Password"
            name="password"
          />

          <button
            type="submit"
            className="cursor-pointer bg-[#4D0EFF] p-2 rounded-md text-sm"
          >
            Log In
          </button>
        </form>
        <span className="block text-center mt-[1rem] text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#4D0EFF]">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
