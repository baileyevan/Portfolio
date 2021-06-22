import React from 'react'
import ContactATag from '../Landing Links/ContactATag'
import GitHubATag from '../Landing Links/GitHubATag'
import LinkedinATag from '../Landing Links/LinkedinATag'
import ProjectsATag from '../Landing Links/ProjectsATag'
import ResumeATag from '../Landing Links/ResumeATag'
import ToTopButton from '../Landing Links/ToTopButton'
import HoverArea from './HoverArea'


export default function NavBar() {

    return (
        <div className="fullSideBar">
            <HoverArea />
            <div className="navBar" id="navBarId">
                <div className="navBarInner">
                    <ToTopButton />
                    <ProjectsATag />
                    <ResumeATag />
                    <GitHubATag />
                    <LinkedinATag />
                    <ContactATag />
                </div>
            </div>
        </div>
    )
}
