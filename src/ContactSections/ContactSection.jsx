import React from 'react'
import './ContactSection.css'
import Icon_Gps from '../assets/ImagesContact/Gps.svg'
import Icon_Phone from '../assets/ImagesContact/Icon-phone.svg'
import Icon_Email from '../assets/ImagesContact/Icon-email.svg'
import ContactBox from './ContactBox'

const ContactSection = () => {
  return (

        <section className="container-section container">

            <ContactBox ImagesSrc={Icon_Gps} description='gps icon' title='Visit us' url='#map' text='Sveavägen 31<br/>111 34 STOCKHOLM' />
            <ContactBox ImagesSrc={Icon_Phone} description='phone icon' title='Call us' url='#' text='+46(8) 121 470 50 <br/>+46(8) 121 470 51' />
            <ContactBox ImagesSrc={Icon_Email} description='email icon' title='Email us' url='https://outlook.live.com/ ' target='_blank' text='info@crito.com<br/>support@crito.com' />
             
        </section>
  )
}

export default ContactSection