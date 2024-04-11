import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { emailVerify } from "../services/apiService";
import { useDispatch } from 'react-redux';

const EmailVerification = () => {
  const [loading, setLoading] = useState(true);
  const { id, uuid } = useParams();
  const dispatch=useDispatch();
  const verify = async () => {
    await emailVerify(id, uuid, navigate,dispatch);
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);
  const navigate = useNavigate();

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col ">
      <NavBar />
      <div className=" min-h-[calc(100vh-4rem)]  flex flex-col gap-3 justify-center items-center">
        {loading && (
          <div className="flex flex-col justify-center items-center gap-3">
            <Loader />
            <p className="text-center text-2xl font-bold">
              Please wait for sometime, we are verifying your email.......
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EmailVerification;
