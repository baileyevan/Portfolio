import React from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#hero" onClick={(e) => handleClick(e, '#hero')}>
        bailey<span className="navbar__logo-accent">.</span>reese
      </a>
      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={(e) => handleClick(e, href)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
