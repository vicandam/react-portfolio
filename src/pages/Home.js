import React from "react";
import { Hero, Experience, Services, Projects, Footer } from "../components";
import { projects } from "../components/data";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects title="featured projects" projects={projects} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
