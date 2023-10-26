// import React from 'react'
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
       

      <Footer />
    </div>
  )
}

export default Home