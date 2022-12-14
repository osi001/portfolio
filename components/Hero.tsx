import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo[];
};

function Hero({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={urlFor(pageInfo[0].profilePic).url()}
        alt=""
        width={100}
        height={200}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-600 pb-2 tracking-[15px] -mb-2">
          {pageInfo[0]?.role}
        </h2>

        <h1 className=" p-5 text-3xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3 mb-3 pb-3">
            <Typewriter
              words={[
                `Hi, I'm ${pageInfo[0]?.name}`,
                "<Welcome to my Portfolio/>",
                "<Take a look around>",
                "if(you like == true):",
                "{contact_for_job}",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <div className="mt-3">
          <Link href="#about">
            <button className="heroButton"> About</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
