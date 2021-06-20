import React from 'react'
import {FaGithub, FaRegNewspaper, FaLinkedin, FaProjectDiagram, FaRegEnvelope} from 'react-icons/fa'



export default function LinkBar() {
        return (
            <span className="landingPageLinkSpan">
                <a href="#projectArea" className="individualLink"><FaProjectDiagram />&nbsp;Projects</a>
                <a href="Resume.pdf" target="_blank" className="individualLink"><FaRegNewspaper />&nbsp;Resume</a>
                <a href="https://github.com/baileyevan" target="_blank" className="individualLink" rel="noreferrer"><FaGithub />&nbsp;GitHub</a>
                <a href="https://www.linkedin.com/in/bailey-reese-620925180/" target="_blank" className="individualLink" rel="noreferrer"><FaLinkedin />&nbsp;Linkedin</a>
                <a href="#" className="individualLink" ><FaRegEnvelope />&nbsp;Contact</a>
            </span>
        )
    
}
