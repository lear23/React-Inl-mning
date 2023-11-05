import React from 'react'
import './ArticleNews.css'
import Buttons from '../../components/buttons/Buttons'
import Group_One from '../../assets/images/Group.png'
import Group_Two from '../../assets/images/Group3.png'
import Group_Three from '../../assets/images/Group2.png'
import dot from '../../assets/images/dot.png'
import ArticleItems from './ArticleItems'

const ArticleNews = ({ backgroundColor }) => {

  return (
    
    <article style={{ backgroundColor: backgroundColor }}>
        <div className="container">
            <div className="news-article">
                <div className="title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Buttons type='btn-theme' url='/News' text='Browse Articles' />
            </div>

            <div className="new-image">

                <ArticleItems ImageSrc={Group_One} description='' title='Business' text='How To Use Digitalization In The Classroom' fras='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                <ArticleItems ImageSrc={Group_Two} description='' title='Business' text='How To Implement Chat GPT In Your Projects' fras='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                <ArticleItems ImageSrc={Group_Three} description='' title='Business' text='The Guide To Support Modern CSS Design' fras='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />

            </div>
            <div className="dot">
                <img src={dot} alt="images of a dot" />
            </div>
        </div>
    </article>

  )
}

export default ArticleNews


