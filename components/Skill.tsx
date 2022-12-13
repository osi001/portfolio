/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../typings";
import Skills from "./Skills";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: true;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={urlFor(skill.image).url()}
        alt=""
        className=" border-gray-200 object-contain border-spacing-6
         w-12 h-12 md:w-20 md:h-20 xl:w-28 xl:h-28 filter group-hover:grayscale transition
          duration-300 ease-in-out "
      />

      <div
        className="absolute opacity-0  group-hover:opacity-60 transition duration-300 first-letter:ease-in-out
       group-hover:bg-white h-20 w-20 xl:w-28 xl:h-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-2xl font-bold text-black opacity-100 ">
            {skill.progress}%
          </p>
        </div>
        <h2 className="text-center">{skill.title}</h2>
      </div>
    </div>
  );
};

export default Skill;
