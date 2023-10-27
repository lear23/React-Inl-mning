import React from 'react'
import './SubFooter.css'
import SubFooter_Line from '../../assets/images/Element-line.svg'

const SubFooter = () => {
  return (
    
    <section className="sub-footer">
        <img className="background-line" src={SubFooter_Line} alt="an image of a line" />
        <div className="container">
            <h2>Get News Updates By Signup </h2>
            <form action="">
                <input type="email" placeholder="username@domain.com" />
                <a className="btn-theme" href="login.html">Subscribe<i className="mindre fi fi-br-arrow-up-right"></i></a>
            </form>
        </div>
    </section>

  )
}

export default SubFooter