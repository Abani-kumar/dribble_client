import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { server_login } from "../services/apiService";


const SigninForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [passwordView, setPasswordView] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await server_login(data.email,data.password,dispatch,navigate);
  };
  return (
    <div className="  flex flex-col gap-4">
      <h1 className=" font-bold text-3xl">Sign in to dribble</h1>
      <form onSubmit={handleSubmit} className=" mt-6 flex flex-col gap-6">
        <div className=" flex flex-col">
          <label htmlFor="email">
            <p className=" font-bold">Email</p>
          </label>
          <input
            value={data.email}
            onChange={handleChange}
            name="email"
            required
            type="email"
            id="email"
            placeholder="john123@gmail.com"
            className="  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md"
          />
        </div>

        <div className=" flex flex-col relative">
          <label htmlFor="password">
            <p className=" font-bold">Password</p>
          </label>
          <input
            value={data.password}
            onChange={handleChange}
            name="password"
            required
            type={passwordView ? "text" : "password"}
            id="password"
            placeholder="6+ Characters"
            className="  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md"
          />
          <div
            onClick={() => setPasswordView(!passwordView)}
            className="cursor-pointer absolute ml-[89%] mt-8"
          >
            {passwordView ? (
              <FaEyeSlash className="text-2xl " />
            ) : (
              <FaEye className="text-2xl " />
            )}
          </div>
        </div>
        <div className=" flex gap-2">
          <button
            type="submit"
            className="text-white p-2 rounded-md 
              bg-pink-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
