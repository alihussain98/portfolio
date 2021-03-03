import React from 'react'
import './HomeBanner.css';
import { Button } from '@material-ui/core'

function HomeBanner() {
    return (
        <div className="home__banner">
            <div className="banner__title">
                <h3> Welcome to my Website</h3>
                <h1 >I'm Ali Hussain</h1>
                <h1>Fuck you too 💖</h1>
            </div>
            <div className="banner__button">
                <Button>Contact Me</Button>
            </div>
        </div>
    )
}

export default HomeBanner
