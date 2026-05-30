import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Bailey Reese</span>
      <div className="footer__links">
        <a href="https://github.com/baileyevan" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/bailey-reese-620925180/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:baileyreese123@gmail.com">Email</a>
      </div>
      <span>Covington, GA · Open to work</span>
    </footer>
  );
};

export default Footer;
