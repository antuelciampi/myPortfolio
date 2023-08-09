import React from "react";

function AboutMe() {
  return (
    <div name="aboutme" className="w-full h-screen bg-[#1C2238]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl text-[#FF8A00] font-bold inline border-b-2 border-neutral-50">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
          <div className="md:text-right text-xl font-normal">
            <p>
              Hi! I'm glad you keep reading so I can tell you that:
            </p>
            <div className="w-[50%] translate-x-[50%] my-3"/>
          </div>
          <div className="text-xl font-light flex flex-col gap-1">
            <p>
              My name is Antuel, i was born on 04/04/2001 in La Plata, Argentina and I'm a Front End developer, specialized in E-Commerces and SPA's.
            </p>
            <p>
            I love video games, writing poetry, hanging out with friends or socializing with new people, go to the stadium to watch my football team (Estudiantes de La Plata), listening to music (as everyone!) and other few things that I will demonstrate through our path together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
