import React from 'react'
import './Navsection.css'
import Logo_Crito from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'

const NavSection = () => {
  return (
    <header>
     <div className="container">
            <a href="index.html"><img src={Logo_Crito} alt="crito logotype" /></a>
            <i className="menu-bars fi fi-br-bars-staggered"></i>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="contact-box">
                            <i className="fi fi-rr-phone-call"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="contact-box">
                            <i className="fi fi-rr-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div className="contact-box last">
                            <i className="fi fi-rs-marker"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener"><i
                                className="fi fi-brands-facebook"></i></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener"><i
                                className="fi fi-brands-twitter"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener"><i
                                className="fi fi-brands-instagram"></i></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener"><i
                                className="fi fi-brands-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink className="home-bold" to="/">Home</NavLink>
                        <NavLink to="/">Service</NavLink>
                        <NavLink to="/">News</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </nav>
                    <a className="btn-theme" href="login.html">Login<i className="mindre fi fi-br-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavSection