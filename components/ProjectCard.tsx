import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <article
      className="flex flex-col space-y-7 flex-shrink-0 h-fit w-[350px] md:w-[400px] xl:w-[600px]
     rounded-l items-center snap-center bg-[#292929] p-10 hover:opacity-100 
     opacity-40 transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 md:w-40  rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://logospng.org/download/netflix/logo-netflix-4096.png"
        alt=""
      />

      <div className=" px-0 md:px-10">
        <h4 className="uppercase text-3xl text-gray-400 font-bold first-letter">
          netflex
        </h4>
        <p className="font-bold text-2xl mt-1"></p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://logospng.org/download/javascript/logo-javascript-icon-1024.png"
            alt=""
            height={32}
            width={32}
            className="rounded-full "
          />
          <Image
            src="https://logospng.org/download/react/logo-react-256.png"
            alt=""
            height={32}
            width={32}
            className="rounded-full "
          />
          <Image
            src="https://logospng.org/download/html-5/logo-html-5-256.png"
            alt=""
            height={32}
            width={32}
            className="rounded-full "
          />
          <Image
            src="https://logospng.org/download/css-3/logo-css-3-256.png"
            alt=""
            height={32}
            width={32}
            className="rounded-full "
          />
          <Image
            src="  https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            alt=""
            height={32}
            width={55}
            className="rounded-full "
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png?20200723100028"
            alt=""
            height={35}
            width={35}
            className="rounded-full "
          />
        </div>

        <p className="uppercase py-5 text-gray-500 ">
          A movie streaming web-app designed to clone Netflix
        </p>

        <ul className="list-disc space-y-5 ml-5 text-lg">
          <li>Point</li>
          <li>Point</li>
          <li>Point</li>
          <li>Point</li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
