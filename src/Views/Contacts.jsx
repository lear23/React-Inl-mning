import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubHeader from '../components/SubHeader/SubHeader'
import SectionContact from '../SectionsContact/SectionContact'
import FormSection from '../SectionsContact/FormSection/FormSection'
import MapSection from '../SectionsContact/MapSection'




const Contacts = () => {
  return (
  <div className="wrapper">

      
            <Header /> 
            <SubHeader />
            <SectionContact />
            <FormSection />
            <MapSection />
            <Footer />
   
       
  </div>

  )
}

export default Contacts