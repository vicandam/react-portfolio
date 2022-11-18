import React from "react";
import Projects from "../components/Projects";
import { projects } from "../components/data";
const ProjectsPage = () => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
