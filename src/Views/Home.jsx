// import React from 'react'
import About from '../HomeSection/About/About.jsx'
import ArticleNews from '../components/ArticleNews/ArticleNews.jsx'
import Choose from '../HomeSection/Choose/Choose.jsx'
import Features from '../HomeSection/Features/Features.jsx'
import MeetOurTeam from '../HomeSection/MeetOurTeam/MeetOurTeam.jsx'
import OurServices from '../HomeSection/Ourservices/OurServices.jsx'
import Projects from '../HomeSection/Projects/Projects.jsx'
import Slider from '../HomeSection/Slider/Slider.jsx'
import SubFooter from '../HomeSection/Subfooter/SubFooter.jsx'
import Testimonial from '../HomeSection/Testimonial/Testimonial.jsx'
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
      <Projects />
      <MeetOurTeam />
      <Testimonial />
      <ArticleNews />
      <SubFooter />      
      <Footer />
    </div>
  )
}

export default Home