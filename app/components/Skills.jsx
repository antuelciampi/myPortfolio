import React from "react";
import Image from "next/image";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import node from "../assets/Node.png";
import github from "../assets/Git.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#1C2238]">
      {/* Contenedor */}
      <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col max-w-xl w-full">
          <p className="text-4xl text-[#FF8A00] max-w-fit w-full my-4 font-bold inline border-b-2 border-white ">Skills</p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-16 max-md:gap-10 mt-5 text-center">
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={react} width={100} alt="react_icon" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={tailwind} width={100} alt="tailwind-icon" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={css} width={100} alt="css-icon" />
            <p>CSS</p>
          </div>
          </div>
          <div className="flex gap-16 max-md:gap-10 mt-5 text-center">
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={javascript} width={100} alt="javascript-icon" />
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={node} width={100} alt="node-icon" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-neutral-50 hover:scale-110 duration-500 p-4">
            <Image className="mx-auto mb-3" src={github} width={100} alt="github-icon" />
            <p>Git</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
