import Portfolio from "../../Images/PortfolioImage.PNG";
import SpaceInvaders from "../../Images/SpaceInvaders.png";
import EventPulse from "../../Images/EventPulse.jpg";


let projects = [
    {
        ProjectId: 1,
        ProjectTitle: "Portfolio",
        Image: Portfolio,
        GitHub: "https://github.com/baileyevan/Portfolio",
        ProjectLink: "https://baileyevan.github.io/Portfolio/",
        Paragraph1: "This is my portfolio website.",
        Paragraph2: "The main technologies used in this project were: React/js, Typescript, Bootstrap and Font Awesome."
    },
    {
        ProjectID: 2,
        ProjectTitle: "Space Invader",
        Image: SpaceInvaders,
        GitHub: "https://github.com/baileyevan/Space-Invaders",
        Paragraph1: "Developed a fully functional Space Invaders clone using Python, C++, and the Butano engine, optimized to run on a Game Boy Advance emulator.",
        Paragraph2: ""
    },
    {
        ProjectID: 3,
        ProjectTitle: "Event Pulse",
        Image: EventPulse,
        GitHub: "https://github.com/CharanPeeriga/Group2_SWE.github.io",
        Paragraph1: "Event Pulse is a collaborative web application that lets users discover and book local events, featuring an interactive Google Maps integration for easy event location. Built with HTML, CSS, JavaScript, and Firebase.",
        Paragraph2: ""
    }
    
];

export default projects;