import React, { useState } from 'react';
import { FaHourglassHalf, FaUserTie } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi2';
import { MdLibraryBooks } from 'react-icons/md';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";

const Header = () => {
      const [selected_date, set_selected_date] = useState(new Date());

      return (
            <div>
                  <div className='flex items-center justify-between p-10 text-white'>
                        <div>
                              <h1 className=' text-6xl font-semibold'>Hello, <span className='text-orange-700'>Rifat!</span></h1>
                              {/* Date Picker Input Field */}
                              {/* <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={selected_date}
                                    onChange={() => set_selected_date()}
                              /> */}
                              <h1 className='text-2xl font-semibold mt-7'>Mar 29, 2025 | Saturday, 11:00 AM</h1>
                        </div>
                        <div>
                              <input className='bg-white text-black px-4 py-1.5 rounded-2xl' type="week" name="" placeholder='Week' id="" />
                        </div>
                  </div>
                  <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 px-10'>
                        <div className='p-5 rounded-2xl bg-[#4d4948]'>
                              <div className='flex items-center justify-between text-3xl text-white'>
                                    <p>1223</p>
                                    <div className='bg-red-400 p-3 rounded-full'>
                                          <HiUsers />
                                    </div>
                              </div>
                              <p className='mt-5 text-white'>Total Visitors</p>
                        </div>
                        <div className='p-5 rounded-2xl bg-[#4d4948]'>
                              <div className='flex items-center justify-between text-3xl text-white'>
                                    <p>740</p>
                                    <div className='bg-red-400 p-3 rounded-full'>
                                    <MdLibraryBooks />
                                    </div>
                              </div>
                              <p className='mt-5 text-white'>Borrowed Books</p>
                        </div>
                        <div className='p-5 rounded-2xl bg-[#4d4948]'>
                              <div className='flex items-center justify-between text-3xl text-white'>
                                    <p>22</p>
                                    <div className='bg-red-400 p-3 rounded-full'>
                                    <FaHourglassHalf />
                                    </div>
                              </div>
                              <p className='mt-5 text-white'>Overdue Books</p>
                        </div>
                        <div className='p-5 rounded-2xl bg-[#4d4948]'>
                              <div className='flex items-center justify-between text-3xl text-white'>
                                    <p>60</p>
                                    <div className='bg-red-400 p-3 rounded-full'>
                                    <FaUserTie />
                                    </div>
                              </div>
                              <p className='mt-5 text-white'>New Menber</p>
                        </div>
                  </div>
            </div>
      );
};

export default Header;