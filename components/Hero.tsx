import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="https://content.api.news/v3/images/bin/45cafaacab2d29d83d27af0ef67b2b22?width=650"
        alt=""
        width={100}
        height={200}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-600 pb-2 tracking-[15px] -mb-2">
          Software Developer
        </h2>

        <h1 className=" text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3 mb-3 pb-3">
            <Typewriter
              words={[
                "<Welcome to my Portfolio/>",
                "<Take a look around>",
                "if(you like == true):",
                "{contact_for_job}",
                "{contact_for_contract}",
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
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
