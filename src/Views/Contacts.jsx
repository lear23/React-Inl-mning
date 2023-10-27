import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubHeader from '../components/SubHeader/SubHeader'
import ContactSection from '../ContactSections/ContactSection'


const Contacts = () => {
  return (
    <div className='wrapper'>
      <Header /> 
      <SubHeader />
      <ContactSection />


      <Footer />
       
    </div>

  )
}

export default Contacts