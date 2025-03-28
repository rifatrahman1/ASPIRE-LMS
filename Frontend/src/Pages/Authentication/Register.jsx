import React from 'react';
import logo2 from '../../../src/assets/login-logo2.png'
import logo1 from '../../../src/assets/login-logo1.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Register = () => {
      return (
            <div className='w-[930px] mx-auto flex justify-center shadow-2xl mt-16'>
                  <div className='flex-1 bg-black flex flex-col justify-center items-center text-white px-10 rounded-r-[70px]'>
                        <img src={logo1} alt="" />
                        <h1 className='text-3xl font-semibold mt-5'>ASPIRE LIBRARY</h1>
                        <div className='mt-18'>
                              <p>Already have Account? Sign In now.</p>
                              <Link to={'/login'}><button className='text-center rounded-2xl font-medium border px-18 flex mt-7 mx-auto py-1.5 cursor-pointer'>SIGN IN</button></Link>
                        </div>
                  </div>
                  <div className='flex-1 justify-center items-center flex flex-col py-20 px-10'>
                        <img src={logo2} alt="" />
                        <h1 className='text-3xl font-semibold mt-5'>Welcome Back !!</h1>
                        <p className='mt-4'>Please enter your credentials to log in</p>
                        <form className='mt-10'>
                              <input className='border-2 px-5 py-2 rounded-2xl w-full' type="email" name="" placeholder='Username' id="" />
                              <br />
                              <input className='border-2 px-5 py-2 rounded-2xl mt-3 w-full' type="email" name="" placeholder='PhotoURL' id="" />
                              <input className='border-2 px-5 py-2 rounded-2xl mt-3 w-full' type="email" name="" placeholder='Email' id="" />
                              <br />
                              <input className='border-2 px-5 py-2 rounded-2xl mt-3 w-full' type="email" name="" placeholder='Password' id="" />
                              <button className='bg-black text-white w-full rounded-2xl font-medium text-center py-1.5 mt-8 cursor-pointer'>SIGN UP</button>
                              <button className='w-full rounded-2xl mt-5 cursor-pointer py-1.5 font-bold text-center border-2 flex items-center justify-center gap-3'>
                                 <span><FcGoogle className='text-2xl'/></span>   Sign in with Google
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default Register;