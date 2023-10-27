import React from 'react'
import NewsHeader from './NewsHeader'
import Rectangle from '../../assets/ImagesNews/Rectangle607.png'

const NewsSubHeader = () => {
  return (
    <section className="subheader">
       <NewsHeader url='#Home'  url2='#News' title='News & Articles' ImagesScr={Rectangle} />
    </section>
  )
}

export default NewsSubHeader


{/* <a href="home.html">Home</a>
<a href="contact.html">contact</a>
<h2>News & Articles</h2>
<div className="line">
    <img src="images/Rectangle 607.png" alt="a line ">
</div> */}