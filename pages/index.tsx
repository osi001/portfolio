import Head from "next/head";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className=" bg-[rgb(11,11,11)] text-white h-screen snap-y snap-proximity overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className=" snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills  */}

      {/* Projects   */}

      {/* Contact */}
    </div>
  );
};

export default Home;
