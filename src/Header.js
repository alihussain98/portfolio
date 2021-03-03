import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import { Button } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo__img" src={logo} alt="sdf" />
            </div>
            <div className="header__left">
                <div className="header__menu">
                    <a href="/">Home</a>
                </div>
                <div className="header__menu">
                    <a href="/">About</a>
                </div>
                <div className="header__menu">
                    <a href="/">Services</a>
                </div>
                <div className="header__menu">
                    <a href="/">Portfolio</a>
                </div>
                <div className="header__menu">
                    <a href="/">Contact</a>
                </div>
            </div>

            <div className="header__right">
                <img alt="fdsfs" className="header__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" />
                <img alt="fdsfs" className="header__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" />
                <img alt="fdsfs" className="header__image" src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/gmail-512.png" />
            </div>
            <div className="header__last">
                <Button>Click me Bitch!</Button>
            </div>
        </div>
    )
}

export default Header
