import React from 'react';
import './About.css';

const STATS = [
  { num: '3.32', label: 'GPA at GSU' },
  { num: 'BS', label: 'Computer Science' },
  { num: '6+', label: 'Projects Shipped' },
  { num: 'ATL', label: 'Covington, GA' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper section-wrapper--alt">
      <div className="section-label fade-in"><span>About</span></div>
      <div className="about__grid fade-in">
        <div>
          <h2 className="section-title">
            CS Foundation.<br />Data Science Focus.
          </h2>
          <div className="about__text">
            <p>
              I'm a recent Computer Science graduate from{' '}
              <strong>Georgia State University</strong> (GPA: 3.32) with hands-on experience
              building data pipelines, analytical tools, and intelligent applications. My CS
              background gives me an edge most data scientists lack — I can engineer the
              systems, not just run the notebooks.
            </p>
            <p>
              My stack centers on <strong>Python, pandas, scikit-learn, and SQL</strong>, with
              growing expertise in deep learning via PyTorch and TensorFlow. I've shipped real
              production software on agile teams and understand what it takes to get data work
              from a Jupyter notebook to a live system.
            </p>
            <p>
              I'm actively seeking{' '}
              <strong>data scientist, data analyst, and ML engineer roles</strong> where I can
              keep growing fast and contribute from day one. Open to internships and co-ops.
            </p>
          </div>
        </div>

        <div className="about__stats">
          {STATS.map(({ num, label }) => (
            <div key={label} className="about__stat-cell">
              <div className="about__stat-num">{num}</div>
              <div className="about__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
