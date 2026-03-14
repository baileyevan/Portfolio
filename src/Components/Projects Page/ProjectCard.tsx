import React from 'react'
import { FaGithub, FaProjectDiagram } from 'react-icons/fa'

interface Project {
    ProjectId: number
    ProjectTitle: string
    Image: string 
    GitHub?: string 
    ProjectLink?: string 
    Paragraph1?: string
    Paragraph2?: string
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
                    {props.GitHub && <a className="projectLinks" href={props.GitHub} target="_blank" rel="noreferrer"><FaGithub /></a>}
                    {props.ProjectLink && <a className="projectLinks" href={props.ProjectLink}><FaProjectDiagram /></a>}
                </span>
            </div>
            <div className="projectDescriptionDiv">
                {props.Paragraph1 && <p className="projectDescription">{props.Paragraph1}</p>}
                {props.Paragraph2 && <p className="projectDescription">{props.Paragraph2}</p>}
            </div>
        </div>
    )
}