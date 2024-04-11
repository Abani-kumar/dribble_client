import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfileStepOne from "../components/ProfileOne";
import ProfileTwo from "../components/ProfileTwo";

const Start = () => {
  const { step } = useSelector((state) => state.auth);
  const [profileDetails, setProfileDetails] = useState({
    avatar: null,
    location: "",
    profession: [],
  });
  return (
    <div>
      {step === 1 && (
        <ProfileStepOne
          profileDetails={profileDetails}
          setProfileDetails={setProfileDetails}
        />
      )}

      {step === 2 && (
        <ProfileTwo
          profileDetails={profileDetails}
          setProfileDetails={setProfileDetails}
        />
      )}
    </div>
  );
};

export default Start;
