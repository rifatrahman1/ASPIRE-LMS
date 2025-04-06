import React, { useContext } from 'react';
import logo2 from '../../../src/assets/login-logo2.png'
import logo1 from '../../../src/assets/login-logo1.png'
import { FcGoogle } from "react-icons/fc";
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const from = location?.state || '/';

      const { sign_in, signin_with_google } = useContext(AuthContext);

      const handle_signin = async (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);

            try {
                  // user login
                  await sign_in(email, password);
                  toast.success('Sigin Successfull...!')
                  navigate(from, { replace: true })
            }
            catch (error) {
                  console.log(error);
                  toast.error(error?.message);
            }
      }

      const handle_google = async () => {
            try {
                  await signin_with_google();
                  toast.success('Signin Successfull...!')
                  navigate(from, { replace: true })
            }
            catch (error) {
                  console.log(error);
                  toast.error(error?.message)
            }
      }
      return (
            <div className='w-[930px] mx-auto flex justify-center shadow-2xl mt-16 bg-white'>
                  <div className='flex-1 justify-center items-center flex flex-col py-20 px-10'>
                        <img src={logo2} alt="" />
                        <h1 className='text-3xl font-semibold mt-5'>Welcome Back !!</h1>
                        <p className='mt-4'>Please enter your credentials to log in</p>
                        <form onSubmit={handle_signin} className='mt-10'>
                              <input className='border-2 px-5 py-2 rounded-2xl' type="email" name="email" placeholder='Email' id="" />
                              <br />
                              <input className='border-2 px-5 py-2 rounded-2xl mt-3' type="password" name="password" placeholder='Password' id="" />
                              <p className='cursor-pointer mt-4'>Forgot password?</p>
                              <button className='bg-black text-white w-full rounded-2xl font-medium text-center py-1.5 mt-8 cursor-pointer'>SIGN IN</button>
                              <button onClick={handle_google} className='w-full rounded-2xl mt-5 cursor-pointer py-1.5 font-bold text-center border-2 flex items-center justify-center gap-3'>
                                    <span><FcGoogle className='text-2xl' /></span>   Sign in with Google
                              </button>
                        </form>
                  </div>
                  <div className='flex-1 bg-black flex flex-col justify-center items-center text-white px-10 rounded-l-[70px]'>
                        <img src={logo1} alt="" />
                        <h1 className='text-3xl font-semibold mt-5'>ASPIRE LIBRARY</h1>
                        <div className='mt-18'>
                              <p>New to our platform? Sign Up now.</p>
                              <Link to={'/register'}><button className='text-center rounded-2xl font-medium border px-18 flex mt-7 mx-auto py-1.5 cursor-pointer'>SIGN UP</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Login;