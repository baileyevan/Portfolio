import React from 'react'
import {FaGithub, FaProjectDiagram} from 'react-icons/fa'

interface Project {
    ProjectId: Number,
    ProjectTitle: String,
    Image: any,
    GitHub: String,
    ProjectLink: String,
    Paragraph1: String,
    Paragraph2: String
}


export default function ProjectCard(props: Project) {

    return ( 
        <div className="projectCard">
            <div className="projectImageDiv">
                <img src={props.Image} alt="<-- loadimage" className="projectImage" />
            </div>
            <div className="projectTitleDiv">
                <h3 className="projectTitle">{props.ProjectTitle}</h3>
            </div>
            <div className="projectLinksDiv">
                <span className="projectLinkSpan">
                    <a className="projectLinks" href={props.GitHub.toString()} target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="projectLinks" href={props.ProjectLink.toString()}><FaProjectDiagram /></a>
                </span>
            </div>
            <div className="projectDescriptionDiv">
                <p className="projectDescription">{props.Paragraph1}</p>
                <p className="projectDescription">{props.Paragraph2}</p>
            </div>
        </div>
    )
}
