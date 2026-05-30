import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__glow" />

      <div className="hero__content fade-in">
        <div className="hero__tag">Open to opportunities</div>
        <h1 className="hero__name">
          Bailey<br />
          <span className="hero__name-accent">Reese</span>
        </h1>
        <p className="hero__title">Data Scientist &amp; Software Developer</p>
        <p className="hero__desc">
          CS graduate from Georgia State University. I build data pipelines, analytical tools,
          and intelligent applications — combining strong software engineering fundamentals
          with growing machine learning expertise to solve real problems.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero__terminal fade-in">
        <div className="hero__terminal-bar">
          <span className="hero__dot hero__dot--r" />
          <span className="hero__dot hero__dot--y" />
          <span className="hero__dot hero__dot--g" />
          <span className="hero__terminal-title">profile.py</span>
        </div>
        <div className="hero__terminal-body">
          <pre>
            <span className="t-comment"># Bailey Reese — Data Scientist{'\n'}</span>
            {'\n'}
            <span className="t-prompt">$ </span>
            <span className="t-cmd">python profile.py{'\n'}</span>
            {'\n'}
            <span className="t-key">name</span>{'      = '}
            <span className="t-val">"Bailey Reese"{'\n'}</span>
            <span className="t-key">location</span>{'  = '}
            <span className="t-val">"Covington, GA"{'\n'}</span>
            <span className="t-key">degree</span>{'    = '}
            <span className="t-val">"BS Computer Science"{'\n'}</span>
            <span className="t-key">school</span>{'    = '}
            <span className="t-val">"Georgia State University"{'\n'}</span>
            <span className="t-key">gpa</span>{'       = '}
            <span className="t-val">{'3.32\n'}</span>
            {'\n'}
            <span className="t-key">stack</span>{' = [\n'}
            {'  '}
            <span className="t-val">"Python"</span>{', '}
            <span className="t-val">"pandas"</span>{', '}
            <span className="t-val">{'\"scikit-learn\",\n'}</span>
            {'  '}
            <span className="t-val">"PyTorch"</span>{', '}
            <span className="t-val">"SQL"</span>{', '}
            <span className="t-val">{'\"TensorFlow\",\n'}</span>
            {']\n'}
            {'\n'}
            <span className="t-key">status</span>{' = '}
            <span className="t-val">"open_to_work" </span>
            <span className="t-comment">{'# True\n'}</span>
            {'\n'}
            <span className="t-prompt">&gt; </span>
            <span className="t-cmd">_</span>
            <span className="t-cursor" />
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
