import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col
     text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="h-screen absolute top-14 p-2 uppercase tracking-[20px] text-gray-400 text-xl mb-2">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
       snap-mandatory snap-x z-20 "
      >
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <img
              src="https://logospng.org/download/netflix/logo-netflix-4096.png"
              alt=""
            />

            <div>
              <h4> Case Study 1</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#550d0d]/10 left-0 h-[500px] -skew-y-12  "></div>
    </div>
  );
}
