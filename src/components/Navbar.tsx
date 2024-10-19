"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import trt_logo from "../assets/images/logo.png";

const topicTitles = ["News", "Features", "Topics", "Video"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row sticky top-0 z-10 justify-between w-screen bg-[#005D99] p-2 items-center px-4 white-text roboto">
      <div className="md:w-1/5">
        <a href="/" className="cursor-pointer">
          <Image src={trt_logo} alt="trt_logo" />
        </a>
      </div>

      <div className="md:w-4/5 flex flex-row justify-end">
        {/* Links for larger screens */}
        <div
          className={`md:flex md:flex-row flex-col gap-8 justify-end ${
            isMenuOpen ? "block" : "hidden"
          } `}
        >
          <ul className="flex flex-col md:flex-row md:gap-8 md:justify-center md:align-center">
            {topicTitles.map((title, index) => {
              return (
                <li
                  className="flex flex-row md:items-center md:align-center cursor-pointer"
                  key={index}
                >
                  <a href="/">{title}</a>
                  <BiChevronDown className="ml-1 cursor-pointer" />
                </li>
              );
            })}
            <li className="cursor-pointer flex flex-row justify-center items-center pr-40 md:pr-0">
              <a href="/">Live</a>
              <GoDotFill className="text-red-500" />
            </li>
          </ul>
          <div>{<FiSearch className="w-6 h-6" />}</div>
        </div>
        {/* Hamburger icon for 768px and smaller screens */}
        <div className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoClose className="w-6 h-6 justify-self-start" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
