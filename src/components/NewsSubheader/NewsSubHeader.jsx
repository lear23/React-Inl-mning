import React from 'react'
import NewsHeader from './NewsHeader'
import Rectangle from '../../assets/ImagesNews/Rectangle607.png'

const NewsSubHeader = () => {
  return (
    <section className="subheader">
       <NewsHeader url='/'  url2='/News' title='News & Articles' ImagesScr={Rectangle} />
    </section>
  )
}

export default NewsSubHeader

