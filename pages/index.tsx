import Head from "next/head";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  return (
    <div
      className=" bg-[rgb(11,11,11)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0
     scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-red-700"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <br />

      <section id="about" className=" snap-center">
        <About />
      </section>
      <br />
      <br />

      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <br />

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Experience */}

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className=" p-1 flex items-baseline justify-between">
            <ArrowUpIcon
              className=" h-8 w-8 rounded-full filter  hover:grayscale-0
       cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
