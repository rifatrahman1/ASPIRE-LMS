import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const Main = () => {
      return (
            <div>
                  {/* Navbar */}
                  <Navbar></Navbar>
                  <div className='grid grid-cols-12 min-h-screen'>

                        <div className='col-span-1 bg-sky-800 h-full'>
                              <Sidebar></Sidebar>
                        </div>
                        {/* Outlet */}
                        <div className='col-span-11 bg-[#201c1d]'>
                              <div className='min-h-[calc(100vh-306px)] '>
                                    <Outlet></Outlet>
                              </div>
                        </div>
                  </div>
                  <div className='bg-[#201c1d]'>
                        <Footer></Footer>
                  </div>
            </div>
      );
};

export default Main;