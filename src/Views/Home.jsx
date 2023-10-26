// import React from 'react'
import Features from '../HomeSection/Features/Features.jsx'
import OurServices from '../HomeSection/Ourservices/OurServices.jsx'
import Slider from '../HomeSection/Slider/Slider.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import ShowCase from '../components/Showcase/ShowCase.jsx'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ShowCase />
      <Slider />
      <Features />
      <OurServices />
       

      <Footer />
    </div>
  )
}

export default Home