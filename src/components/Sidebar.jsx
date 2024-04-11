import React from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from '../constants';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import { server_logout } from '../services/apiService';


const Sidebar = ({open,setSidebaropen,logout}) => {
  
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={` absolute top-0 left-0 bottom-0  ${open && ' right-10 '} overflow-hidden bg-slate-300 p-4 `}>
      <nav className=' flex flex-col gap-5 '>
        <div className=' flex  justify-between'>
            {
              user==null ? <Link to='/signup' className=' bg-pink-600 text-white px-3 py-2  rounded-md'>Sign Up</Link>:<div className=' flex gap-2 items-center'>
                <img src={user?.avatarUrl} alt='useravatar' className='  w-[40px] h-[40px] rounded-md'/>
                <p className=' text-gray-600'>{user?.userName}</p>
              </div>
            }
            <button className=' h-fit w-fit p-2 border-2 rounded-md border-slate-500'>
                <ImCross onClick={()=>setSidebaropen(false)} className=' text-gray-600'/>
            </button>
        </div>
        <ul className=' flex flex-col gap-3'>
        {
        navlinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className='  text-gray-600 hover:text-gray-900'>{link.title}</Link>
            </li>
          ))}
        </ul>
       <ul className=' flex flex-col gap-3 '>
       <li>
        <Link to='/profile'>View Profile</Link>
        </li>
        <li>
        <Link to='/getStarted'>Update Profile</Link>
        </li>
       </ul>
       {
         user && <button onClick={logout} className=' bg-pink-600 text-white px-3 py-2  rounded-md'>Logout</button>
       }
      </nav>
    </div>
  );
};

export default Sidebar;
