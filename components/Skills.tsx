import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Image from "next/image";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center
     xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 xl:top-16 uppercase tracking-[20px] text-2xl text-gray-500 ">
        Skills{" "}
      </h3>

      <div className=" absolute top-36 grid grid-cols-4  md:grid-cols-6  gap-5 md:gap-6 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
