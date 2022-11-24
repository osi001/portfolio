import Head from "next/head";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className=" bg-[rgb(11,11,11)] text-white h-screen snap-y snap-mandatory  overflow-scroll z-0">
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

      {/* Contact */}
    </div>
  );
};

export default Home;
