import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000]">
      <div className="bg-[#0c0c0c] shadow-lg rounded-lg px-10 py-8 w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Maze Admin
        </h1>
        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none border border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              placeholder="Enter your Password"
              required
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none border border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};



export default Login;
