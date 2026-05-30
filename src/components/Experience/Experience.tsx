import React from 'react';
import { timeline } from '../../data';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-label fade-in"><span>Experience &amp; Education</span></div>
      <div className="fade-in">
        <h2 className="section-title">Background</h2>
      </div>
      <div className="experience__timeline fade-in">
        {timeline.map((item, i) => (
          <div key={i} className="experience__item">
            <div className="experience__dot" />
            <div className="experience__date">{item.date}</div>
            <div className="experience__role">{item.role}</div>
            <div className="experience__company">
              {item.company} · {item.location}
            </div>
            <ul className="experience__bullets">
              {item.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
