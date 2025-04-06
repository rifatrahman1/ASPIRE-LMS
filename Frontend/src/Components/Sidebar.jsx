import React, { useContext } from 'react';
import { CiGrid42 } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { FaCompass } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { Link } from 'react-router-dom';
import AllBooks from '../Pages/AllBooks';
import { AuthContext } from '../Provider/AuthProvider';


const Sidebar = () => {
      const {log_out} = useContext(AuthContext);
      return (
            <div className='text-3xl flex flex-col justify-between min-h-[calc(100vh-306px)] items-center'>
                  <div className='flex flex-col space-y-10 mt-12'>
                        <Link to={'/'} title='Home'><CiGrid42 /></Link>
                        <Link to={'/add-books'} title='Add Books'><GiBookshelf /></Link>
                        <Link to={'/all-books'} title='All Books'><MdMenuBook /></Link>
                        <Link title='My Borrowed Books'><FaCompass /></Link>
                        <Link title='User'><HiUsers /></Link>
                  </div>
                  <div>
                        <Link onClick={log_out} title='Log out'><MdLogout /></Link>
                  </div>
            </div>
      );
};

export default Sidebar;