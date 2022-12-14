import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProject";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  return (
    <div
      className=" bg-[rgb(11,11,11)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0
     scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-red-700"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <br />

      <section id="about" className=" snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <br />
      <br />

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <br />

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Experience */}

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="#hero">
          <div className=" p-1 flex items-baseline justify-between">
            <ArrowUpIcon
              className=" h-8 w-8 rounded-full filter text-gray-500  hover:grayscale-0
       cursor-pointer"
            />
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },

    //Next.js will attempt to re-generate the page
    // - when a req comes in
    // - at most every 10 secs
    revalidate: 10,
  };
};
