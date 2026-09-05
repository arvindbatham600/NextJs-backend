"use client";

import axios from "axios";
import { useState } from "react";
import { signup } from "../actions/user";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const SendRequest = async () => {
    // const response = await axios.post("http://localhost:3000/api/user", {username, password})
    const res = await signup(username, password);
    console.log("response from the server action", res);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="text-xl font-bold"> Sign Up </h1>
      <div className="flex flex-col border p-4 gap-2 ">
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="bg-white text-black p-1 pl-2 rounded-md"
          type="text"
          placeholder="User Name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white text-black p-1 pl-2 rounded-md"
          type="text"
          placeholder="Password"
        />
        <button
          onClick={SendRequest}
          type="button"
          className="border p-1 bg-white text-black rounded-md"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
