import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">
          Engineering case studies: A summary of what I built, how I built it, and what I learned.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
