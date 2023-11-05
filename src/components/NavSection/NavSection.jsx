import React from 'react'
import './Navsection.css'
import Logo_Crito from '../../assets/images/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import Buttons from '../buttons/Buttons'

const NavSection = () => {
  return (
    <header>
     <div className="container">
            <Link to="/"><img src={Logo_Crito} alt="crito logotype" /></Link>
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
                        <NavLink to="/Service">Service</NavLink>
                        <NavLink to="/News">News</NavLink>
                        <NavLink to="/Contacts">Contact</NavLink>
                    </nav>
                    <Buttons type='btn-theme' text='Login' url='/login'/>                   
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavSection