import React, { useState } from "react";
import { account } from "../constants";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../redux/slices/authslice";
import { refreshAccessToken, updateProfile } from "../services/apiService";
import { useEffect } from "react";

const ProfileTwo = ({ profileDetails, setProfileDetails }) => {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const { profession } = profileDetails;

  const addOption = (option) => {
    setProfileDetails({
      ...profileDetails,
      profession: [...profession, option],
    });
  };
  const removeOption = (option) => {
    setProfileDetails({
      ...profileDetails,
      profession: [...profession.filter((item) => item !== option)],
    });
  };

  const getAccessToken = async () => {
    const result = await refreshAccessToken(refreshToken, dispatch);
    setToken(result);
  };
  useEffect(() => {
    if (refreshToken && accessToken === null) {
      getAccessToken();
    }
  }, []);

  const profileUpdate = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("profilePicture", profileDetails.avatar);
    formdata.append("location", profileDetails.location);

    let work = profileDetails.profession.map((id) => {
      return account[id - 1].title;
    });

    for (let i = 0; i < work.length; i++) {
      formdata.append("profession", work[i]);
    }

    formdata.append("accessToken", token);

    if (token !== null) {
      await updateProfile(formdata, navigate,dispatch);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="dancing-script text-fuchsia-500 mt-4 ml-4 text-2xl">
        dribbble
      </div>
      <div className=" h-[calc(100vh-8rem)] flex flex-col  justify-center   items-center max-sm:mt-32">
        <div className=" flex flex-col gap-4 items-center ">
          <p className=" text-3xl font-bold text-center">
            What bring's you to dribble?
          </p>
          <p className=" text-slate-400 text-center">
            Select the option that best describe you. Don't worry you can
            explore other options later
          </p>
        </div>
        <div className=" grid grid-cols-3 max-sm:grid-cols-1  gap-3 mt-4">
          {account?.map((option) => {
            return (
              <div
                onClick={() => {
                  profession?.indexOf(option.id) === -1
                    ? addOption(option.id)
                    : removeOption(option.id);
                }}
                key={option.id}
                className=" cursor-pointer w-[30vw] max-w-[300px] max-sm:w-[90vw] flex flex-col  justify-center items-center gap-5 p-3 rounded-md border-[1px] border-slate-300"
              >
                <img
                  src={option.image}
                  alt={option.title}
                  className=" w-[100px] h-[100px] object-cover "
                />
                <h1 className=" font-bold text-lg text-center">
                  {option.title}
                </h1>
                {profession.indexOf(option.id) !== -1 ? (
                  <IoIosRadioButtonOn className=" text-pink-600 text-3xl" />
                ) : (
                  <IoIosRadioButtonOff className=" text-slate-400 text-3xl" />
                )}
              </div>
            );
          })}
        </div>

        <div className=" flex flex-col gap-2 items-center mt-4">
          {profession.length !== 0 && (
            <div className=" flex gap-1">
              <h1 className=" font-bold">Anything else?</h1>
              <h1 className=" text-blue-700">You can select multiple</h1>
            </div>
          )}
          <button
            onClick={profileUpdate}
            disabled={profession.length === 0}
            className={`${
              profession.length === 0 ? " bg-pink-300 " : "bg-pink-600"
            } w-fit text-white p-2 px-6 rounded-md`}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwo;
