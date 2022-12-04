import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col
     text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0
      "
    >
      <h3 className="h-screen absolute top-14 p-2 uppercase tracking-[20px] text-gray-400 text-xl mb-2">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
       snap-mandatory snap-x z-20  scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-red-700 scrollbar-thin "
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              src="https://logospng.org/download/netflix/logo-netflix-4096.png"
              alt=""
              width={500}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center">
                <span className=" underline decoration-white ">
                  {" "}
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>{" "}
                Neflix Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Netflex, app is a video streaming service built to clone
                netflix, It features a beautiful home page looking exactly like
                netflixs' with movie data pulled from tmdb.api. App features
                complete sign in and sign out sessions with googleAuth managed
                with firebase. It also features a stripe payment process for
                subscriptions.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#550d0d]/10 left-0 h-[500px] -skew-y-12  "></div>
    </motion.div>
  );
}
