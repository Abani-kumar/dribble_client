import React, { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signup } from "../services/apiService";

const SignupForm = () => {
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordView, setPasswordView] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async(data) => {
    await signup(data,navigate);
    reset()
  };

  return (
    <div className="  flex flex-col gap-4">
      <h1 className=" font-bold text-3xl">Sign up to dribble</h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" mt-6 flex flex-col gap-4"
      >
        <div className=" max-sm:flex-col flex gap-3">
          <div>
            <label htmlFor="name">
              <p className=" font-bold">Name</p>
            </label>
            <input
              name="name"
              {...register("name", {
                required: true,
              })}
              type="text"
              id="name"
              placeholder="John Doe"
              className=" w-full  p-2 border-[1px] border-none outline-none bg-slate-200 rounded-md"
            />
            {errors.name && <p className="errorMsg">name is required.</p>}
          </div>
          <div>
            <label htmlFor="username">
              <p className="  font-bold">Username</p>
            </label>
            <input
              name="userName"
              type="text"
              {...register("userName", {
                required: true,
              })}
              placeholder="John"
              className="w-full  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md"
            />
            {errors.userName && (
              <p className="errorMsg">userName is required.</p>
            )}
          </div>
        </div>

        <div className=" flex flex-col">
          <label htmlFor="email">
            <p className=" font-bold">Email</p>
          </label>
          <input
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            type="email"
            placeholder="john123@gmail.com"
            className="  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md"
          />
          {errors.email && <p className="errorMsg">email is required.</p>}
        </div>

        <div className=" flex flex-col relative">
          <label htmlFor="password">
            <p className=" font-bold">Password</p>
          </label>
          <input
            type={passwordView ? "text":"password"}
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            placeholder="6+ Characters"
            className="  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md "
          />
          <div onClick={()=>setPasswordView(!passwordView)} className="cursor-pointer absolute ml-[92%] mt-8">
            {passwordView ? (
              <FaEyeSlash className="text-2xl " />
            ) : (
              <FaEye className="text-2xl " />
            )}
          </div>
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className=" flex  gap-2">
          <input
            value={terms}
            onChange={() => setTerms(!terms)}
            id="check"
            type="checkbox"
          />
          <label htmlFor="check">
            <p className=" font-bold">I agree to the terms and conditions</p>
          </label>
        </div>
        <div className=" flex gap-2">
          <button
            disabled={!terms || loading}
            className={`text-white p-2 rounded-md ${
              terms ? "bg-pink-600" : "bg-pink-300"
            }`}
          >
            {loading ? <Loader /> : "Create account"}
          </button>
        </div>
        <div>
          <p className=" font-light">
            This site is protected by reCAPTCHA and the Google
          </p>
          <p className=" font-light">
            <span className=" text-blue-700 cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className=" text-blue-700 cursor-pointer">
              Terms of Services{" "}
            </span>
            apply
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
