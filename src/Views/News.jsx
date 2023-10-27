import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsSubHeader from '../components/NewsSubheader/NewsSubHeader'
import NewsArticle from '../NewsSection/NewsArticle/NewsArticle'
import SubFooter from '../NewsSection/NewsArticle/SubFooter'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <NewsSubHeader />
      <NewsArticle />
      <SubFooter />     
      <Footer />
    </div>
  )
}

export default News