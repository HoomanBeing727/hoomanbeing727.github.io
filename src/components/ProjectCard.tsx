import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { Project } from "../data/content";

function renderBold(text: string) {
  const parts = text.split("**");
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <h3 className="project-name">{project.name}</h3>
        <span className="project-years">{project.years}</span>
      </div>
      <p className="project-role">
        <span className="mono-label">Role:</span>
        {project.role}
      </p>
      <p className="project-context">{project.context}</p>
      <ul className="project-points">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{renderBold(bullet)}</li>
        ))}
      </ul>
      <ul className="chip-row project-tags">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <p className="project-lesson">
        <span className="mono-label">Lesson</span>
        {project.lesson}
      </p>
      {project.links?.map((link) => (
        <a
          key={link.href}
          className="project-link"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
          <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
        </a>
      ))}
    </article>
  );
}
