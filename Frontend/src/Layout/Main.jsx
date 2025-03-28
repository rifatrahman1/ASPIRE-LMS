import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
      return (
            <div>
                  {/* Navbar */}
                  <Navbar></Navbar>
                  {/* Outlet */}
                  <div className='min-h-[calc(100vh-306px)] '>
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Main;