# Bailey Reese — Portfolio
 
Personal portfolio site built to showcase data science and software engineering work. Designed with a dark, modern aesthetic and structured for easy content updates.
 
**Live site:** [baileyevan.github.io/Portfolio](https://baileyevan.github.io/Portfolio)
 
---
 
## Tech Stack
 
- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **CSS Modules** — scoped, component-level styles
- **Formspree** — contact form backend
- **gh-pages** — GitHub Pages deployment
---
 
## Project Structure
 
```
src/
├── App.tsx                  # Root component
├── index.tsx                # Entry point
├── styles/globals.css       # CSS variables, resets, shared utilities
├── types/index.ts           # TypeScript interfaces
├── data/index.ts            # All site content — edit this to update the site
├── hooks/useFadeIn.ts       # Scroll-triggered fade animation
└── components/
    ├── Navbar/
    ├── Hero/
    ├── About/
    ├── Skills/
    ├── Projects/
    │   ├── Projects.tsx
    │   └── ProjectCard.tsx
    ├── Experience/
    ├── Contact/
    └── Footer/
```
 
---
 
## Getting Started
 
```bash
npm install
npm start
```
 
Runs the dev server at `http://localhost:5173`.
 
---
 
## Updating Content
 
All site content lives in one file: **`src/data/index.ts`**
 
- **Add a project** — append an object to the `projects` array
- **Add a skill** — add to the relevant `skillGroups` entry
- **Update experience/education** — edit the `timeline` array
- **Update contact info** — edit the `contactInfo` array
No other files need to change for content updates.
 
---
 
## Contact Form
 
The contact form is powered by [Formspree](https://formspree.io). The endpoint is set in `src/components/Contact/Contact.tsx`:
 
```ts
fetch('https://formspree.io/f/maqkznjy', {
```
 
---
 
## Deployment
 
```bash
npm run deploy
```
 
Builds the project and pushes to the `gh-pages` branch. Make sure GitHub Pages is configured to serve from that branch under **Settings → Pages**.
