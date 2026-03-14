import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './ProjectsDB'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProjectsPage() {

    return (
        <div className="projectPage" id="projectArea">
            <h1 className="projectsPageTitle">Projects</h1>
            <div className="projectPageOuterCard">
                <Container>
                    <Row>
                        {projects.map((pro) => (
                            <Col xs={12} sm={12} md={6} lg={4} xl={4} key={pro.ProjectId}>
                                <ProjectCard 
                                    ProjectId={pro.ProjectId ?? 0} // fallback if undefined
                                    Image={pro.Image ?? ''}        // fallback empty string
                                    ProjectTitle={pro.ProjectTitle ?? 'Untitled Project'}
                                    GitHub={pro.GitHub}            // optional
                                    ProjectLink={pro.ProjectLink}  // optional
                                    Paragraph1={pro.Paragraph1}    // optional
                                    Paragraph2={pro.Paragraph2}    // optional
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}