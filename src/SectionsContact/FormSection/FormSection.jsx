import React from 'react'
import './FormSection.css'

const FormSection = () => {
  return (
<div className="container-section">
    <form   className="container"  method="post">

            <ul>
                <li class="title">
                    <h2>Leave us a message<br/>for any information.</h2>
                </li>
                <li class="text-form">
                    <input class="text" type="text" required id="name" name="user_name" placeholder="Name*" />
                </li>
                <li class="text-form">
                    <input class="email" type="email" required id="mail" name="user_mail" placeholder="Email*" />
                </li>

                <li>
                    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Your Message*"></textarea>
                </li>

                <div class="form-button">
                    <a class="btn-theme" href="login.html" target="_blank">Send Message<i
                            class="mindre fi fi-br-arrow-up-right"></i></a>
                </div>
            </ul>

    </form>
</div>  
  )
}

export default FormSection