import React from 'react'
import {FaRegNewspaper} from 'react-icons/fa'
import Resume from '../Landing Page/Resume.pdf'

export default function ResumeATag() {
    return (
        <div className="iconDiv">
            <a href={Resume} target="_blank" className="navBarResume icon" rel="noreferrer"><FaRegNewspaper /></a>
        </div>
    )
}
