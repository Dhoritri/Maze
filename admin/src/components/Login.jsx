import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const onSubmitHandler = async(e)=>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+ '/api/user/admin', {email,password})
            if(response.data.success){
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
  return (


    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#292929] shadow-md rounded-lg px-8 py-6 mx-w-md">
        <h1 className="text-2xl mb-4 font-bold text-white">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-white text-sm font-medium mb-2">Email Address</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-200 outline-none"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-white text-sm font-medium mb-2">Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-200 outline-none"
              type="Password"
              placeholder="Enter You password"
              required
            />
          </div>
          <button type="submit" className="text-black mt-2 w-full py-2 px-4 rounded-md bg-white ">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
