import { useContext, useEffect, useState } from "react"
import {ShopContext} from '../context/ShopContext'
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const {token,setToken,navigate} = useContext(ShopContext)
  const [name,setName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = async(event)=>{
      event.preventDefault();
      try {
        if (currentState === 'Sign Up') {
            const response = await axios.post(backendUrl + '/api/user/register',{name,email,password});
            if(response.data.success){
              setToken(response.data.token);
              localStorage.setItem('token',response.data.token);
            }else{
              toast.error(response.data.message);
            }
        } else {
          const response = await axios.post(backendUrl + '/api/user/login', {email,password});
          if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem('token',response.data.token);
          }else{
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl text-white">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-slate-300"/>
        </div>
        {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" /> }
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer text-white ">Forgot Your password?</p>{
            currentState === 'Login' ? <p onClick={()=> setCurrentState('Sign Up')} className="cursor-pointer text-white ">Create Account</p> : <p onClick={()=> setCurrentState('Login')} className="cursor-pointer text-white ">Login Here</p>
          }
        </div>
        <button className="bg-white text-black font-light px-8 py-2 mt-4  hover:bg-gray-700 transition-colors duration-300 ease-in-out">{currentState ==='Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
