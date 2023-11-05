import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsSubHeader from '../components/NewsSubheader/NewsSubHeader'
import ArticleSection from '../ArticleSection/ArticleSection'
import ArticleNews from '../components/ArticleNews/ArticleNews'

const NewsDetails = () => {
  return (
    <div className="wrapper">
       <Header />
       <NewsSubHeader />
       <ArticleSection />
       <ArticleNews backgroundColor="#f0efe9"/>      
       <Footer />

    </div>
  )
}

export default NewsDetails