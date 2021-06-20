import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './ProjectsDB'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProjectsPage() {

    return (

        <div className="projectPage" id="projectArea">
            <h1 className="projectsPageTitle" >Projects</h1>
            <div className="projectPageOuterCard">
                <Container>
                    <Row>
                        {projects.map((pro) => (
                            <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                                <ProjectCard key={pro.ProjectId} src={pro.Image} title={pro.ProjectTitle} link1={pro.GitHub} link2={pro.ProjectLink}  p1={pro.Paragraph1} p2={pro.Paragraph2} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
            
    ) 
    
}
