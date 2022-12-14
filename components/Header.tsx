import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
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
        className="flex flex-row flex-shrink-0 items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <div>
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
              network="whatsapp"
              url="https://wa.me/+447861607475"
              fgColor="grey"
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Osiano Momoh
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
