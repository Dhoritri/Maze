import { useState } from "react"

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = async(event)=>{
      event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl text-white">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-slate-300"/>
        </div>
        {currentState === 'Login' ? '' : <input type="text" placeholder="Name" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" /> }
        <input type="email" placeholder="Email" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" />
        <input type="password" placeholder="Password" required className="w-full px-3 py-2 border bg-inherit text-white border-gray-300" />
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
