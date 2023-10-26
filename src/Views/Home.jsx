// import React from 'react'
import About from '../HomeSection/About/About.jsx'
import Choose from '../HomeSection/Choose/Choose.jsx'
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
      <About />
      <OurServices />
      <Choose />
       

      <Footer />
    </div>
  )
}

export default Home