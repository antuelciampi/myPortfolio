import React from "react";


function Projects() {
  return (
    <div name="proyectos" className="w-full md:h-screen bg-[#1C2238]">
      <div className="max-w-5xl mx-auto flex flex-col justify-center w-full h-full p-4 bg-[#1C2238]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 text-[#FF8A00] border-white">
            Works
          </p>
          <p className="py-6">Some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-eat">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="textl-2xl font-bold">ReactJs App</span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-data">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="textl-2xl font-bold">ReactJs App</span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-flappy">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="textl-2xl font-bold">ReactJs App</span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-weather">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100  text-center">
              <span className="textl-2xl font-bold">Weather app made with React and OpenWeatherMap</span>
              <div className="pt-8 text-center">
                <a href="https://appclima-mocha.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/antuelciampi/Weather-App" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-budget">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="textl-2xl font-bold">ReactJs App</span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
          className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div content-next">
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="textl-2xl font-bold">ReactJs App</span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FF8A00] text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
