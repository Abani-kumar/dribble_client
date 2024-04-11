import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../components/SigninForm";

const Signin = () => {
  return (
    <div className=" w-full  min-h-[100vh] flex justify-between">
      <div className=" max-md:hidden  min-h-[100vh] w-[40%] bg-center bg-cover bg-no-repeat">
        <video
          src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-full w-full"
        />
      </div>
      <div className=" max-md:w-[100%]   w-[60%] ">
        <div className=" p-3 flex flex-col gap-10">
          <p className=" w-full flex justify-end max-sm:justify-center">
            Don't have account?{" "}
            <Link to="/signup" className=" text-blue-500">
              Register
            </Link>
          </p>
          <div className=" w-full flex justify-center items-center">
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
