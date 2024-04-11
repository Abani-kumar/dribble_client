import React from "react";
import { accountoptions } from "../constants";
import { BsThreeDots } from "react-icons/bs";

const ProfileCard = ({ user }) => {
  const fakelink = [
    "Work",
    "Boosted Shots",
    "Collections",
    "Liked Shots",
    "About",
  ];
  return (
    <div className="  flex flex-col gap-3 p-5 ">
      <div className=" flex gap-8 max-sm:mb-[80%] max-sm:flex-col justify-center items-center">
        <img
          src={
            user.avatarUrl
              ? user.avatarUrl
              : `https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`
          }
          alt="useravatar"
          className=" w-[120px] h-[120px] rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <p className="text-4xl">{user?.userName}</p>
          <div>{user?.location}</div>
          <div className="flex items-center gap-6">
            <button className="px-2 py-2 rounded-full border-2 border-gray-400">
              Edit Profile
            </button>
            <button className="px-2 py-2 rounded-full border-2 border-gray-400">
              <BsThreeDots />
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <ul>
          {
            user?.profession.map((job)=>(
              <li className="text-center mt-2 text-sky-600">{job}</li>
            ))
          }
        </ul>
        <div className="w-[90%] mx-auto flex gap-5 max-sm:hidden items-center mt-5">
          {fakelink.map((link, index) => (
            <button key={index} className=" hover:text-slate-500">
              {link}
            </button>
          ))}
        </div>
        <div className="mx-auto w-[90%] border-b-[1px] mt-2 border-w-[90vw] border-slate-700"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
