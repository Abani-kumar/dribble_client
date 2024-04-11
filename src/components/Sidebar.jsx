import React from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from '../constants';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";


const Sidebar = ({open,setSidebaropen}) => {
  
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={` absolute top-0 left-0 bottom-0 transform transition-transform duration-500 ease-in-out ${open && 'right-12'  } overflow-hidden bg-slate-300 p-4 `}>
      <nav className=' flex flex-col gap-5 ml-2'>
        <div className=' flex  justify-between'>
            <div className=' flex flex-col gap-2 '>
            <img src={
                  user.avatarUrl
                    ? user.avatarUrl
                    : `https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`
                } alt='useravatar' className=' w-[40px] h-[40px] rounded-full'/>
                <p className='  font-bold text-gray-600'>{user.userName}</p>
            </div>
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
        <Link to='/getStarted' >Update Profile</Link>
        </li>
       </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
