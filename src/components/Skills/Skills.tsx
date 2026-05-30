import React from 'react';
import { skillGroups } from '../../data';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="section-label fade-in"><span>Skills</span></div>
      <div className="fade-in">
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <p className="section-sub">
          My technical stack — with emphasis on the data science and ML ecosystem.
        </p>
      </div>
      <div className="skills__grid fade-in">
        {skillGroups.map((group) => (
          <div key={group.name} className="skills__group">
            <div className="skills__group-icon">{group.icon}</div>
            <div className="skills__group-name">{group.name}</div>
            <div className="skills__tags">
              {group.skills.map((skill) => (
                <span
                  key={skill.label}
                  className={`skills__tag${skill.accent ? ' skills__tag--accent' : ''}`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
