import React, { useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa";
import { setStep } from "../redux/slices/authslice";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const ProfileStepOne = ({ profileDetails, setProfileDetails }) => {
  const dispatch=useDispatch();
  function filechangehandler(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfileDetails((prev) => ({
        ...prev,
        avatar: file,
        image: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const { step }=useSelector((state)=>state.auth)

  return (
    <div>
      <div className="dancing-script mt-4 ml-4 text-fuchsia-500 text-2xl">
        dribbble
      </div>
      <div className="  h-full flex flex-col   items-center mt-6">
        <div className=" h-full  flex flex-col  justify-between ">
          <div>
            <p className=" text-3xl font-bold max-sm:text-center">
              Welcome! Let's create your profile
            </p>
            <p className=" text-slate-400 max-sm:text-center">
              Let's others get to know you better! you can do this later
            </p>
          </div>
          <div className=" flex flex-col  gap-4">
            <p className=" font-bold text-xl max-sm:text-center">
              Add an avatar
            </p>
            <div className=" flex max-sm:flex-col items-center gap-5 ">
              <label htmlFor="file">
                <div className=" flex justify-center items-center w-[150px] h-[150px] rounded-full border-2 border-dashed cursor-pointer">
                  {profileDetails.image != null ? (
                    <img
                      src={profileDetails.image}
                      alt="profile"
                      className=" w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FaCamera className=" text-5xl text-slate-400" />
                  )}
                </div>
              </label>
              <label htmlFor="file" className="flex flex-col gap-4">
                <p className=" cursor-pointer p-2   border-2  border-slate-300 rounded-md">
                  Choose an image
                </p>
                <div className=" flex items-center gap-2">
                  <FaAngleRight className=" text-zinc-400" />
                  <p className=" text-zinc-400">or choose defaults</p>
                </div>
              </label>
              <input
                onChange={filechangehandler}
                type="file"
                id="file"
                className=" hidden"
              />
            </div>
          </div>
          <div className="flex flex-col max-sm:mx-auto">
            <div className=" flex flex-col gap-3 mt-4 ">
              <p className=" font-bold text-xl">Add your location</p>
              <input
                value={profileDetails.location}
                onChange={(e) => {
                  setProfileDetails((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Enter your location"
                className="  outline-none border-b-[2px] border-slate-400 "
              />
            </div>
            <div className="mt-2">
              <button
                onClick={() => {
                  if (
                    profileDetails.location.trim().length === 0 ||
                    !profileDetails.image
                  ) {
                    toast.error("Please fill all the fields");
                    return;
                  }
                  dispatch(setStep(2));
                }}
                className="  bg-pink-600 text-white p-2 px-6 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStepOne;
