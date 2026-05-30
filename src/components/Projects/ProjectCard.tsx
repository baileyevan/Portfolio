import React from 'react';
import { Project } from '../../types';
// @ts-ignore: allow importing CSS in TypeScript without module declarations
import './Projects.css';

interface Props {
  project: Project;
}

const ArrowIcon: React.FC = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" />
  </svg>
);

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={`project-card${project.comingSoon ? ' project-card--soon' : ''}`}>
      <div className={`project-card__num${project.comingSoon ? ' project-card__num--accent' : ''}`}>
        {project.num}
      </div>
      <div className="project-card__name">{project.name}</div>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
      <div className="project-card__links">
        {project.links.map(({ label, url }) => (
          <a key={label} className="project-card__link" href={url} target="_blank" rel="noreferrer">
            {label} <ArrowIcon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
