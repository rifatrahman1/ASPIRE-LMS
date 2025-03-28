import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
      return (
            <div className='bg-[#353334] flex justify-between items-center text-white px-7 py-8'>
                  <div className='flex items-center gap-10'>
                        <h1 className='sans text-4xl'>ASPIRE</h1>
                        <RxHamburgerMenu className='text-3xl' />
                        <h1 className='text-3xl'>Dashboard</h1>
                  </div>
                  <div>
                        <input className='bg-white text-[#353334] text-lg px-5 py-2 w-[400px] rounded-2xl' type="search" name="" placeholder='Search this books' id="" />
                  </div>
                  <div className='flex items-center gap-10'>
                        <IoNotifications className='text-3xl' />
                        <div className='dropdown dropdown-end z-50'>
                              <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                              >
                                    <div className='w-10 rounded-full'>
                                          <img
                                                referrerPolicy='no-referrer'
                                                alt='User Profile Photo'
                                          />
                                    </div>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52'
                              >
                                    <li>
                                          <Link to='/login' className='justify-between'>
                                                Login
                                          </Link>
                                    </li>
                                    <li>
                                          <Link to='/register'>Register</Link>
                                    </li>
                                    <li className='mt-2'>
                                          <button
                                                // onClick={logOut}
                                                className='bg-gray-200 text-center flex items-center gap-3 justify-center'>
                                                Logout <span><TbLogout /></span>
                                          </button>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;