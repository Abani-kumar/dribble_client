import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" min-h-[100vh] w-[100vw] flex flex-col ">
      <NavBar />
      <div className=" h-[calc(100vh-4rem)] w-full flex justify-center mt-[5%]">
        {user && <ProfileCard user={user} />}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
