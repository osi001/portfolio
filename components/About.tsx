import { motion } from "framer-motion";
import React from "react";
type Props = {};

function About({}: Props) {
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
        src="https://media.gq.com/photos/56d865249acdcf20275f1581/master/w_3000,h_4045,c_limit/kevin-hart-bomber-jacket.jpg"
        alt=""
        className="relatve p-2 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
         object-cover md:rounded-lg  md:w-65 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <motion.div
        initial={{
          x: 100,
          opacity: 0.5,
          scale: 0.8,
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
        className="space-y-10 px-10 md:px-10"
      >
        <h4 className="text-4xl font-semibold">Here is a Little Background</h4>
        <p>
          Hi, im Osiano, a recent computer Science graduate currently
          specialising in front-end techmologies, looking for a graduate or
          entry role as a software developer. I am expertly trained in Object
          Oriented Programming, Agile practices for the full Software
          Development Life Cycle. I am a natural logical thinker with a love and
          passion for prolem solving My INTP MTBI personality type is an
          attestation to a naturally agile and curios mind with a love for
          problem solving and learning new technologies
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
