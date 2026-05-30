import React from 'react';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';
// @ts-ignore: side-effect import for CSS module without type declarations
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-wrapper section-wrapper--alt">
      <div className="section-label fade-in"><span>Projects</span></div>
      <div className="fade-in">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-sub">
          Production-deployed apps, data tools, and systems projects — more data science work in progress.
        </p>
      </div>
      <div className="projects__grid fade-in">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
