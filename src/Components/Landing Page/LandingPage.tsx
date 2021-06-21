import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import LinkBar from './LinkBar'

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div className="titleAndSubtitle">
                <div className="title">
                    <Title />
                </div>
                <div className="subTitle">
                    <Subtitle />
                </div>
            </div>
            <div className="links">
                <LinkBar />
            </div>
        </div>
    )
}
