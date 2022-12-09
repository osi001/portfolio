import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/momoh.o/?next=%2Fmomoh.o%2F"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/osiano-momoh-2a44591b5/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/osi001"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wa.me/+447861607475"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <div>
        {/* <a href="#contact"> */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className=" flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <div>
            <SocialIcon
              className=" cursor-pointer"
              network="email"
              fgColor="grey"
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              {" "}
              Connect with me
            </p>
          </div>
        </motion.div>
        {/* </a> */}
      </div>
    </header>
  );
}

export default Header;
