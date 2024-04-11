import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { navlinks } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setRemoveAccessToken,
  setRemoveRefreshToken,
  setRemoveUser,
} from "../redux/slices/authslice";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import logo1 from "../assets/logo1.jpeg";
import { refreshAccessToken, server_logout } from "../services/apiService";

const NavBar = () => {
  const navigate=useNavigate()
  const { user } = useSelector((state) => state.auth);
  // console.log(user?.avatarUrl)
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebaropen] = useState(false);
  const dispatch = useDispatch();

  const getAccessToken = async () => {
    await refreshAccessToken(refreshToken, dispatch);
  };
  useEffect(() => {
    if (refreshToken && accessToken === null) {
      getAccessToken();
    }
  }, []);
  const logout = async () => {
    await server_logout(accessToken,navigate);
    dispatch(setRemoveUser());
    dispatch(setRemoveAccessToken());
    dispatch(setRemoveRefreshToken());
    dispatch(setRemoveUser());
  };
  return (
    <nav className="h-16 flex items-center justify-between p-3 mt-1  w-[90%] mx-auto">
      <ul className=" flex items-center gap-3">
        <li className="mr-4">
          <Link to="/" className="  font-bold text-2xl">
            <p className="dancing-script text-pink-500 ">dribbble</p>
          </Link>
        </li>
        {navlinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="max-md:hidden  text-gray-600 hover:text-gray-900 transition-all"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="  max-sm:hidden flex items-center gap-2">
        <div className="max-md:hidden  flex items-center gap-2 bg-slate-200 shadow-sm  px-2 py-2 rounded-md">
          <FaSearch className=" text-slate-700" />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none w-[160px] border-none bg-transparent placeholder-gray-600"
          />
        </div>
        {user === null ? (
          <Link
            to="/signin"
            className=" hover:bg-[#003ECB] bg-[#2151c0]  transition-all duration-200 max-sm:p-1 text-white px-3 py-2 rounded-md"
          >
            Log in
          </Link>
        ) : (
          <div className=" flex gap-2 items-center">
            <div className=" z-50  group flex gap-2 items-center">
              <img
                src={
                  user.avatarUrl
                    ? user.avatarUrl
                    : `https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`
                }
                alt="useravatar"
                className=" w-[40px] h-[40px] rounded-full"
              />
              <p className=" hidden lg:block  text-gray-600">{user.username}</p>
              <div className="  -z-30   hidden group-hover:block absolute top-14  right-[90px] h-[30px] w-[30px]  bg-slate-300 rounded-md  rotate-45"></div>
              <ul className=" -z-30   hidden group-hover:block absolute  top-16 right-20 bg-white  rounded-md shadow-md">
                <li className=" mt-8">
                  <Link to="/profile" className="block p-2 hover:bg-slate-200">
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/getStarted"} className="block p-2 hover:bg-slate-200">
                    Update Profile
                  </Link>
                </li>

                <li className="mb-2">
                  <button
                    onClick={logout}
                    className=" text-blue-700 hover:bg-slate-200 w-full py-1"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className=" max-sm:block hidden ">
        <IoMenu
          onClick={() => setSidebaropen(!sidebarOpen)}
          className=" text-3xl text-slate-400"
        />
      </div>

      {sidebarOpen && (
        <Sidebar open={sidebarOpen} setSidebaropen={setSidebaropen} />
      )}
    </nav>
  );
};

export default NavBar;
