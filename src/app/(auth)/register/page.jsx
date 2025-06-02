import Link from "next/link";
import { createUser } from "@/app/actions/user";

const Register = () => {
  return (
    <div className="bg-[#323140]/80 h-screen flex items-center justify-center text-white">
      <div className="bg-[#0A0A14] rounded-lg p-[2rem] 2xl:p-[4rem] w-[28%] 2xl:w-[25%] 2xl:h-[70%]">
        <h1 className="mb-[1.8rem] text-center text-2xl">Register</h1>
        <form action={createUser} className="flex flex-col space-y-[1.8rem]">
          <input
            type="text"
            className="border-2 border-[#342479] rounded-md p-2 text-sm shadow-md shadow-[#342479]/50"
            placeholder="Username"
            name="username"
          />
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

          <button type="submit" className="bg-[#4D0EFF] p-2 rounded-md text-sm">
            Register
          </button>
        </form>
        <span className="block text-center mt-[1rem] text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#4D0EFF]">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
