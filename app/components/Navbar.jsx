"use client";

import React, {useState} from "react";
import Image from "next/image";
import Logo from "../assets/AClogo1.png";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsPersonLinesFill} from "react-icons/bs";
import {Link} from "react-scroll";

const navBar = () => {
  const [nav, setNav] = useState(false);
  const click = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed text-white bg-[#1C2238] h-[10vh] w-full flex justify-between items-center px-4">
      <Image className="mt-5" src={Logo} width={250} />

      {/* menu */}
      <div>
        <ul className="hidden md:flex gap-6 mr-5">
          <li className="cursor-pointer">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="aboutme" smooth={true} offset={50} duration={500}>
              About me
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="proyectos" smooth={true} offset={50} duration={500}>
              My projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* menu burguer */}
        <div onClick={click} className="md:hidden absolute right-10 z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#1C2238] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl cursor-pointer">
            <Link onClick={click} to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link onClick={click} to="aboutme" smooth={true} offset={50} duration={500}>
              About me
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link onClick={click} to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link onClick={click} to="proyectos" smooth={true} offset={50} duration={500}>
              My projects
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link onClick={click} to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Sociales */}
        <div className="hidden xl:flex fixed flex-col top-[40%] left-0">
          <ul>
            <li className="text-lg w-[155px] h-[55px] flex justify-between items-center bg-[#2d5186] pl-1 ml-[-95px] hover:ml-[1px] duration-500 ">
              <a
                href="https://www.linkedin.com/in/antuel-ciampi/"
                className="flex justify-between items-center w-full text-gray-300 pr-2"
              >
                LinkedIn <FaLinkedin size={50} />
              </a>
            </li>
            <li className="text-lg w-[155px] h-[55px] flex justify-between items-center bg-[#0D1117] pl-1 ml-[-95px] hover:ml-[1px] duration-500">
              <a
                href="https://github.com/antuelciampi"
                className="flex justify-between items-center w-full text-gray-300 pr-2"
              >
                GitHub <FaGithub size={50} />
              </a>
            </li>
            <li className="text-lg w-[155px] h-[55px] flex justify-between items-center bg-[#e9b310ce] pl-1 ml-[-95px] hover:ml-[1px] duration-500">
              <a
                href="mailto:antuelciampi@gmail.com"
                className="flex justify-between items-center w-full text-gray-300 pr-2"
              >
                Gmail <HiOutlineMail size={50} />
              </a>
            </li>
            <ul className="text-lg w-[155px] h-[55px] flex justify-between items-center bg-[#ff0000d5] pl-1 ml-[-95px] hover:ml-[1px] duration-500 cursor-pointer">
              <li className="flex justify-between items-center w-full text-gray-300 pr-2">
                <Link to="contact" smooth={true} offset={50} duration={500}>
                  Contact form
                </Link>
                <BsPersonLinesFill size={50} />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navBar;
