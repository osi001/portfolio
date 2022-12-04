import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import "swiper/css";

type Props = {};

const Project = (props: Props) => {
  return (
    // <div className="h-screen flex   justify-center mx-auto items-center ">
    //   <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-400 text-xl xl:top-10">
    //     Projects
    //   </h3>

    <div
      className=" h-screen bg-[#080808] flex items-center justify-center 
     scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-red-700"
    >
      <div className=" max-w-5xl">
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" h-96 flex">
              <div className={`card to-red-500/40`}>
                <h3>Netflex</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" h-96 flex">
              <div className={`card to-red-500/40`}>
                <h3>Netflex</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" h-96 flex">
              <div className={`card to-red-600/40`}>
                <h3>Netflex</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    /* <div className=" w-full h-fit flex flex-row space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div> */
    // </div>
  );
};

export default Project;
