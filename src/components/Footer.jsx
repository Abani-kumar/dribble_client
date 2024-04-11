import React from "react";
import {
  FaDribbble,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className=" w-full flex flex-col    gap-5 bg-slate-50 text-black">
      <div className=" w-full p-3    flex  max-sm:flex-col  gap-10 max-sm:pl-10">
        <div className=" flex flex-col gap-3">
          <h1 className="dancing-script text-2xl text-pink-500">dribble</h1>
          <p className=" text-slate-800">
            Dribble is the world's leading
            <br /> community for creatives<br></br> to share grow.and get hired
          </p>
          <div className="flex space-x-4 mt-2">
            <FaDribbble className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-purple-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
        <div className=" flex-1 grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-2  justify-between">
          {footerLinks.map((item) => {
            return (
              <div className=" flex flex-col gap-3">
                <h1 className=" font-bold text-lg">{item.headingtext}</h1>
                <ul className=" flex flex-col gap-2">
                  {item.links.map((link) => {
                    return (
                      <li>
                        <a
                          href={link.path}
                          className=" text-slate-800 text-sm cursor-pointer hover:font-semibold"
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex max-sm:flex-col justify-between border-t-[1px]   border-slate-400 p-3 ">
        <p className=" text-center text-sm">
          © 2023 Dribbble. All rights reserved.
        </p>
        <p>20,145,635 shots dribbled</p>
      </div>
    </footer>
  );
};

export default Footer;
