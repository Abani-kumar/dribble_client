import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const Verification = ({ email }) => {
  return (
    <div className=" h-full p-3 flex flex-col  gap-2  mt-10 items-center">
      <p className=" text-3xl font-bold">Please verify your email....</p>
      <MdOutlineMarkEmailRead className=" text-9xl text-pink-600" />
      <p className=" text-slate-500">
        Please verify your email id,we have sent email to:
      </p>
      <p className="  max-sm:text-base font-bold text-lg">{email}</p>
      <p className=" text-slate-500">
        Click on the confirmation link to start using Dribble
      </p>
      <p className="  text-center text-slate-500">
        Didn’t receive the email? Check your Spam folder, it may have been
        caught by a filter. If <br></br> you still don’t see it, you can{" "}
        <button className=" text-pink-600">
          resend the confirmation email.
        </button>{" "}
      </p>
      <p>
        Wrong email address?{" "}
        <Link to="/signup" className=" text-pink-600">
          Change it
        </Link>
      </p>
    </div>
  );
};

export default Verification;
