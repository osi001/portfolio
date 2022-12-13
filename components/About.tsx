import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
type Props = {
  pageInfo: PageInfo[];
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-14 p-2 uppercase tracking-[20px] text-gray-400 text-xl mb-2">
        {" "}
        About
      </h3>

      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: false,
        }}
        src={urlFor(pageInfo[0]?.heroImage).url()}
        alt=""
        className="relatve p-2 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
         object-cover md:rounded-lg  md:w-65 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <motion.div
        initial={{
          x: 100,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{
          once: false,
        }}
        className="space-y-5 px-3 md:px-10"
      >
        <h4 className="text-xl md:text-2xl xl:text-4xl  font-semibold">
          Here is a Little Background
        </h4>

        <p className="text-sm md:text-lg ">
          {pageInfo[0]?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
