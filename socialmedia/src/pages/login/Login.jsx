import React, { useContext, useRef } from 'react'
import { loginCall } from '../../../apicalls';
import {Authcontext}from '../../context/authcontext'
export default function Login() {
    const email=useRef();
    const password=useRef();
    const {isFetching,dispatch}=useContext(Authcontext)



    const handelClick=(e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch)
    }
  
  return (
    <div className='w-[100vw] h-[100vh] bg-[#f0f2f5] flex items-center justify-center'>
        <form id="loginwrapper" className='w-[70%] h-[70%] flex' onSubmit={handelClick}>
            <div id="loginleft" className='flex-[1] flex flex-col justify-center'>
                <h3 className='font-bold text-[50px] text-[#1775ee]'>Happyial</h3>
                <span className='text-[24px]'>Connect with friends and share some happy<br/> moments with them at Happyial</span>
            </div>
            <div id="loginright">
                <div id="loginbox" className='h-[500px] w-[600px] p-5 bg-white rounded-xl flex flex-col justify-between  '>
                    <input placeholder='Email' type="email" className='h-20 rounded-xl border-[2px] border-gray-500 p-5 text-lg outline-none ' required ref={email} />
                    <input placeholder='password' type="password" minLength="6" className='h-20 rounded-xl border-[2px] border-gray-500 p-5 text-lg outline-none' required ref={password} />
                    <button className='h-20 rounded-xl border-none bg-[#1775ee] text-white text-xl font-medium cursor-pointer'>Log In</button>
                    <span className='text-center text-[#1775ee]'>Forgot Password</span>
                    
                    <button className='h-16 rounded-xl border-none bg-[#42b72a] text-white text-xl font-medium cursor-pointer' onClick={()=>  window.location.href = "/register"}>Create a New Account</button>
                </div>
            </div>
        </form>
    </div>
  )
}
