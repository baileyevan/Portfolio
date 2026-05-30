import { Project, SkillGroup, TimelineItem, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    num: '01 / ML - Data Science Projects',
    name: 'Kaggle Competitions',
    description:
      'Actively building data science-focused projects — exploratory data analysis notebooks, predictive modeling pipelines, and visualizations using Python, pandas, scikit-learn, and matplotlib. Follow on GitHub to stay updated.',
    tags: ['Python', 'pandas', 'scikit-learn', 'matplotlib', 'PyTorch'],
    links: [{ label: 'GitHub Profile', url: 'https://github.com/baileyevan/kaggle-projects' }],
    comingSoon: false,
  },
  {
    id: 2,
    num: '02 / Featured · Live in Production',
    name: 'Event Pulse',
    description:
      'Full-stack event discovery and booking platform built with a 6-person agile team. Served as back-end developer — engineered Firestore security rules, data schema, multi-role auth, transaction processing, and geospatial routing via Google Maps API. Delivered across 4 sprints to a live production URL.',
    tags: ['React', 'Firebase', 'Firestore', 'NoSQL', 'Google Maps API', 'Agile'],
    links: [
      { label: 'GitHub', url: 'https://github.com/CharanPeeriga/Group2_SWE.github.io' },
      { label: 'Live Demo', url: 'https://event-pulse-8d1a8.web.app' },
    ],
  },
  {
    id: 3,
    num: '03 / Data Engineering',
    name: 'Python Processor — Numerical Computing Engine',
    description:
      'Python-based processor simulation implementing signed 32-bit integer parsing with overflow detection and saturation protection. Built modular conversion functions across binary, hex, and decimal — demonstrating precision numeric computing directly applicable to ML pipelines and the internals of libraries like NumPy.',
    tags: ['Python', 'Numerical Computing', 'Data Representation', 'Computer Architecture'],
    links: [{ label: 'GitHub', url: 'https://github.com/baileyevan/ComputerArchitecureTask1' }],
  },
  {
    id: 4,
    num: '04 / SQL & Analytics',
    name: 'Database Admin Access Tool',
    description:
      'Java-based administrative tool interfacing with a relational SQL database via DBeaver. Built query modules to extract, filter, and aggregate records — applying data wrangling and relational modeling skills directly relevant to data science workflows. Streamlined access patterns reduced manual operations measurably.',
    tags: ['Java', 'SQL', 'DBeaver', 'Data Wrangling', 'Relational Modeling'],
    links: [{ label: 'GitHub', url: 'https://github.com/baileyevan/Database-Admin-Tool' }],
  },
  {
    id: 5,
    num: '05 / Systems',
    name: 'Space Invaders — GBA Game Engine',
    description:
      'Fully functional Space Invaders built for the GameBoy Advance emulator using C++, Python, and the Butano Engine. Required strict memory management, real-time collision detection, and game-state optimization under tight hardware constraints — reinforcing performance fundamentals behind efficient data processing.',
    tags: ['C++', 'Python', 'Butano Engine', 'Memory Management', 'Algorithms'],
    links: [{ label: 'GitHub', url: 'https://github.com/baileyevan/Space-Invaders' }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: '🐍',
    name: 'Python Ecosystem',
    skills: [
      { label: 'Python', accent: true },
      { label: 'pandas', accent: true },
      { label: 'NumPy', accent: true },
      { label: 'scikit-learn', accent: true },
      { label: 'Matplotlib', accent: true },
      { label: 'SciPy' },
      { label: 'Jupyter' },
    ],
  },
  {
    icon: '🧠',
    name: 'Machine Learning',
    skills: [
      { label: 'TensorFlow', accent: true },
      { label: 'PyTorch', accent: true },
      { label: 'Keras' },
      { label: 'regression' },
      { label: 'classification' },
      { label: 'ML pipelines' },
    ],
  },
  {
    icon: '🗄️',
    name: 'Data & Databases',
    skills: [
      { label: 'SQL', accent: true },
      { label: 'Firebase / Firestore', accent: true },
      { label: 'DBeaver', accent: true },
      { label: 'NoSQL' },
      { label: 'data modeling' },
      { label: 'REST APIs' },
      { label: 'ETL' },
    ],
  },
  {
    icon: '⚙️',
    name: 'Engineering',
    skills: [
      { label: 'Java' },
      { label: 'C++' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'React' },
      { label: 'Git / GitHub' },
      { label: 'HTML/CSS' },
    ],
  },
  {
    icon: '📐',
    name: 'CS & Math Foundations',
    skills: [
      { label: 'Algorithms' },
      { label: 'Data Structures' },
      { label: 'Statistics & Probability' },
      { label: 'Linear Algebra' },
      { label: 'Discrete Math' },
      { label: 'Computer Architecture' },
    ],
  },
  {
    icon: '🤝',
    name: 'Workflow',
    skills: [
      { label: 'Agile / Scrum' },
      { label: 'sprint planning' },
      { label: 'team development' },
      { label: 'Google Maps API' },
      { label: 'sequence diagrams' },
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    date: '2022 — Spring 2026',
    role: 'B.S. Computer Science',
    company: 'Georgia State University',
    location: 'Atlanta, GA · GPA: 3.32',
    bullets: [
      'Data Structures & Algorithms, Database Systems, Computer Architecture, Software Engineering',
      'Discrete Mathematics, Object-Oriented Programming, Web Programming',
      'Capstone: Event Pulse — production-deployed full-stack app built on agile team across 4 sprints',
    ],
  },
  {
    date: '2018 — 2021',
    role: 'Computer Programming Certificate — Java Developer',
    company: 'Gwinnett Technical College',
    location: 'Lawrenceville, GA · GPA: 3.5',
    bullets: [
      'Focused on Java development fundamentals, applied programming, and software design principles',
    ],
  },
  {
    date: '2019 — 2020',
    role: 'Striker / Operations Analyst',
    company: 'Brand Vaughan Lumber Co.',
    location: 'Madison, GA',
    bullets: [
      'Identified operational bottlenecks and proposed data-informed process improvements — new yard/warehouse layouts and forklift maintenance protocols — resulting in a 17% increase in production throughput',
      'Applied quantitative analysis and logical reasoning to evaluate efficiency tradeoffs across workflows',
    ],
  },
  {
    date: '2018 — 2019',
    role: 'Electrical Apprentice',
    company: 'Cleveland Electric',
    location: 'Atlanta, GA',
    bullets: [
      'Interpreted technical schematics and blueprints to execute precise commercial electrical installations',
      'Reinforced structured problem-solving and attention to detail in high-stakes environments',
    ],
  },
];

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'baileyreese123@gmail.com';
const contactPhone = import.meta.env.VITE_CONTACT_PHONE ?? '678.708.6322';

export const contactInfo: ContactInfo[] = [
  { icon: '✉', label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
  { icon: '📞', label: 'Phone', value: contactPhone, href: `tel:${contactPhone.replace(/\D/g, '')}` },
  { icon: 'in', label: 'LinkedIn', value: 'bailey-reese-620925180', href: 'https://www.linkedin.com/in/bailey-reese-620925180/' },
  { icon: 'GH', label: 'GitHub', value: 'github.com/baileyevan', href: 'https://github.com/baileyevan' },
  { icon: '📍', label: 'Location', value: 'Covington, GA' },
];
