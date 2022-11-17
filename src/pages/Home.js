import React from "react";
import {
  Navbar,
  Hero,
  Experience,
  Services,
  Projects,
  Footer,
} from "../components";
import { projects } from "../components/data";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Navbar />
        <Services />
        <Experience />
        <Projects title="featured projects" projects={projects} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
