import React from 'react'
import './Footer.css'
import Logo_Footer from '../../assets/images/Logo-footer.svg'
import Line_Footer from '../../assets/images/Element-line2.svg'
import FooterLink from './FooterLink'

const Footer = () => {
  return (
    
<footer className=" footer">

    <div className="container">
        <div className=" link-1">
            <a className="log" href=""><img src={Logo_Footer} alt="logo" /></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati
                voluptas voluptates!
                Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>

        <FooterLink  title="Company" url="" />
        <FooterLink  title="Help" url="" />
        <FooterLink  title="Resources" url="" />
        <FooterLink  title="Link" url="" />

        {/* <div className="link link-2">
            <h4>Company</h4>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>

        <div className="link link-3">
            <h4>Help</h4>
            <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms& Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>


        <div className="link link-4 ">
            <h4>Resources</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to-Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div>
        <div className="link link-5">
            <h4>Link</h4>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to-Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div> */}

    </div>
    <div className="line-footer">
        <img src={Line_Footer} alt="a line image"/>
    </div>
    <hr/>
    <div className="container subfoot">

        <p>&copy; Crito - Consulting Company Inc All Rights Reserved.</p>
        <div className="foot-socialmedia">
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

</footer>
    
  )
}

export default Footer