import React from 'react'
import {FaGithub, FaRegNewspaper, FaLinkedin, FaProjectDiagram, FaRegEnvelope} from 'react-icons/fa'
import Resume from '../Landing Page/Resume.pdf'



export default function LinkBar() {
        return (
            <div className="landingPageLinkSpan">
                <a href="#projectArea" className="individualLink"><FaProjectDiagram /> Projects</a>
                <a href={Resume} target="_blank" className="individualLink" rel="noreferrer"><FaRegNewspaper /> Resume</a>
                <a href="https://github.com/baileyevan" target="_blank" className="individualLink" rel="noreferrer"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/bailey-reese-620925180/" target="_blank" className="individualLink" rel="noreferrer"><FaLinkedin /> Linkedin</a>
                <a href="#contactAnchor" className="individualLink" ><FaRegEnvelope /> Contact</a>
            </div>
        )
    
}
