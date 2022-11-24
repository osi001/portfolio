import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Image from "next/image";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center
     xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 ">
        Skills{" "}
      </h3>

      <div className=" absolute top-36 grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-14 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
