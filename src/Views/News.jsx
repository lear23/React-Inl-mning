import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsSubHeader from '../components/NewsSubheader/NewsSubHeader'
import SubFooter from '../components/Subfooter/SubFooter'
import NewsApi from '../NewsSection/NewsApi'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <NewsSubHeader />
      <NewsApi />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default News