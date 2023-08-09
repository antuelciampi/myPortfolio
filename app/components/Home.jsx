import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#1C2238]">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl">Hi! My name is</p>
        <h1 className="pb-2 text-[#FF8A00] md:text-8xl text-5xl font-bold">
          Antuel Ciampi
        </h1>
        <h2 className="text-[#ffa33ba4] md:text-5xl text-3xl font-bold">
          and I'm a Front End Developer.
        </h2>
        <p className="max-md:max-w-sm mt-2 text-justify text-xl font-light">
          I specialize in the creation (and sometimes also layout) and maintenance of web pages. I'm always focused on keep evolving both personally and profesionally.
        </p>
        <div className="mt-3">
          <button className="flex items-center group gap-2 border-2 px-6 py-3 hover:bg-[#FF8A00] hover:border-[#FF8A00]">
            Watch my projects
            <span>
              <HiArrowNarrowRight className="group-hover:rotate-90 duration-500" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
