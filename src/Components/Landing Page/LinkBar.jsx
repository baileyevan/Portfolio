import React from 'react'
import {FaGithub, FaRegNewspaper, FaLinkedin, FaProjectDiagram} from 'react-icons/fa'


export default function LinkBar() {
        return (
            <span>
                <a href="#" className="individualLink"><FaProjectDiagram />Projects</a>
                <a href="#" className="individualLink"><FaRegNewspaper /> Resume</a>
                <a href="https://github.com/baileyevan" className="individualLink"><FaGithub />GitHub</a>
                <a href="https://www.linkedin.com/in/bailey-reese-620925180/" className="individualLink"><FaLinkedin />Linkedin</a>
            </span>
        )
    
}
