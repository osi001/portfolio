import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col
     text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0
      "
    >
      <h3 className="h-screen absolute top-20 md:top-14 xl:top-6  p-2 uppercase tracking-[20px] text-gray-400 text-xl mb-2">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
       snap-mandatory snap-x z-20  scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-red-700 scrollbar-thin "
      >
        {projects?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              width={500}
            />

            <div className="space-y-10 md:px-5 max-w-full">
              <h4 className=" text-2xl md:text-2xl xl:text-4xl font-semibold text-center text-gray-300">
                {/* <span className=" text-xl underline decoration-white ">
                  {" "}
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>{" "} */}
                {project.title}
              </h4>

              <div className=" flex flex-shrink items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    width={40}
                    height={40}
                    // className="w-12 h-12"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-sm md:text-lg  text-center md:text-left">
                {project.summary}
              </p>

              <div className=" mx-auto">
                <a href={`${project.linkToBuild} `}>
                  <button className=" bg-red-700 opacity-50 hover:opacity-100 px-5 py-3 rounded-full text-gray-100 font-bold text-lg">
                    Build
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#550d0d]/10 left-0 h-[500px] -skew-y-12  "></div>
    </motion.div>
  );
}
