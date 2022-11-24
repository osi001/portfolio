/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: true;
};

const Skill = ({ directionLeft }: Props) => {
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
        src="https://logospng.org/download/javascript/logo-javascript-256.png"
        alt=""
        className="rounded-full border-gray-200 object-contain border-spacing-6
         border w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition
          duration-300 ease-in-out "
      />

      <div
        className="absolute opacity-0  group-hover:opacity-80 transition duration-300 first-letter:ease-in-out
       group-hover:bg-white h-24 w-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-2xl font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
