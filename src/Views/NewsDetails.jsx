import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsSubHeader from '../components/NewsSubheader/NewsSubHeader'
import ArticleSection from '../ArticleSection/ArticleSection'
import ArticleCarousel from '../components/ArticlesCarousel/ArticleCarousel'

const NewsDetails = () => {
  return (
    <div className="wrapper">
       <Header />
       <NewsSubHeader />
       <ArticleSection />
       <ArticleCarousel />
       <Footer />

    </div>
  )
}

export default NewsDetails