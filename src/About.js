import React from 'react'
import './About.css'
import Tabs from './Tabs';
import { Button } from '@material-ui/core'

function About() {
    return (
        <div className="about">
            <div className="about__left">
                <img alt="asd" src="https://www.kolpaper.com/wp-content/uploads/2020/09/Android-Goku-Wallpaper.jpg" />
            </div>
            <div className="about__right">
                <div className="about__right__heading">
                    <h1>About Me</h1>
                </div>
                <div className="about__right__desc">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                    </p>
                </div>
                <div className="about__right__tabs">
                    <div className="about__tabs__items">
                        <Button>Skills</Button>
                        <Tabs />
                    </div>
                    <div className="about__tabs__items">
                        <Button>Education</Button>
                    </div>
                    <div className="about__tabs__items">
                        <Button>Experience</Button>
                    </div>
                    <div className="about__tabs__items">
                        <Button>Interests</Button>
                    </div>
                </div>
                {/*
                */}
            </div>
        </div>
    )
}

export default About
