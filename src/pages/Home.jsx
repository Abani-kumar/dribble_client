import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Home = () => {
  // const { user } = useSelector((state) => state.user);
  const user=""
  return (
    <div className=" w-full min-h-[100vh] flex flex-col gap-4">
      <NavBar />
      <div className="max-sm:h-[60%] max-lg:h-[80%] h-[calc(100vh-4rem)] flex flex-col gap-4 items-center max-sm:mt-16 mt-24">
        <p className=" text-center max-sm:text-2xl max-md:text-3xl  text-6xl font-light">
          Discover the world’s top
        </p>
        <p className="max-sm:text-2xl max-md:text-3xl  text-6xl font-light ">
          designers & creatives
        </p>
        <p className=" text-center font-extralight w-[45%] max-sm:w-[80%] mt-6">
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </p>
        {user ? (
          <p className=" font-bold text-2xl mt-6">{`Welcome ${user.username}`}</p>
        ) : (
          <Link
            to="/signin"
            className=" hover:bg-[#003ECB] bg-[#2151c0]  transition-all duration-200 text-white px-3 py-2 rounded-md mt-6"
          >
            Get Started
          </Link>
        )}
      </div>

      <div className="flex w-[90%] mx-auto justify-between mt-[-100px] max-sm:mt-0 max-lg:mt-0 mb-8 max-sm:flex-col">
        <div className="w-[500px] max-sm:w-[90%] border-[10px] border-[#E5FCDF] max-sm:mx-auto">
          <video
            src="https://framerusercontent.com/assets/WozDzrtXLXFW9li2N4rKlsztsKk.mp4"
            loop
            autoPlay
            playsInline
            className=" w-full h-fit"
          />
        </div>
        <div className="w-[40%] mx-auto max-sm:w-[90%] max-sm:mt-4">
          <p className=" text-4xl mb-6">Hire faster & smarter with our designer search</p>
          <p className="mb-6">Easily find quality freelancers and full-time creatives using our powerful search engine with filters for specialty, location, experience level, and more. Search for available talent in the largest professional creative community with just a few clicks.</p>
          {user ? (
          <p className=" font-bold text-2xl ">{` ${user.username} start your journey`}</p>
        ) : (
          <Link
            to="/signin"
            className=" hover:bg-[#003ECB] bg-[#2151c0]  transition-all duration-200 text-white px-3 py-2 rounded-md mt-6"
          >
            Start your search
          </Link>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
