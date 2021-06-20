import React from 'react'
import {FaGithub, FaProjectDiagram} from 'react-icons/fa'


export default function ProjectCard(props) {

    return ( 
        <div className="projectCard">
            <div className="projectImageDiv">
                <img src={props.src} alt="<-- loadimage" className="projectImage" />
            </div>
            <div className="projectTitleDiv">
                <h3 className="projectTitle">{props.title}</h3>
            </div>
            <div className="projectLinksDiv">
                <span className="projectLinkSpan">
                    <a className="projectLinks" href={props.link1} target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="projectLinks" href={props.link2}><FaProjectDiagram /></a>
                </span>
            </div>
            <div className="projectDescriptionDiv">
                <p className="projectDescription">{props.p1}</p>
                <p className="projectDescription">{props.p2}</p>
            </div>
        </div>
    )
}
