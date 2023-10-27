import React from 'react'
import './NewsArticle.css'
import ArticlesItem from './ArticlesItem'
import Group_one from '../../assets/ImagesNews/group.png'
import Group_Two from '../../assets/ImagesNews/group3.png'
import Group_three from '../../assets/ImagesNews/group2.png'
import Group_four from '../../assets/ImagesNews/group4.png'
import Group_Five from '../../assets/ImagesNews/group5.png'
import Group_six from '../../assets/ImagesNews/group6.png'
import Group_Seven from '../../assets/ImagesNews/group7.png'
import Group_Eigth from '../../assets/ImagesNews/group8.png'
import Group_nine from '../../assets/ImagesNews/group9.png'
import Pagination from '../../assets/ImagesNews/Pagination.png'

const NewsArticle = () => {
  return (
    <article>
        <div className="container">
                <div className="title">
                    <h2>Our News & Article</h2>
                </div>
                <div id="new-image">

                    <ArticlesItem  ImageScr={Group_one} description='an image of an employed' title='Business' text='How To Use Digitalization In The Classroom' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_Two} description='an image of an employed' title='Business' text='How To Implement Chat GPT In Your Projects' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_three} description='an image of an employed' title='Business' text='The Guide To Support Modern CSS Design' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_four} description='an image of an employed' title='Business' text="Why You Need To Implement The Five S's" text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={ Group_Five} description='an image of an employed' title='Business' text='Get More Involved With Your End Users' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={ Group_six} description='an image of an employed' title='Business' text='Guided Tour Of Our New Head Office In Stockholm' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_Seven} description='an image of an employed' title='Business' text='Using Business Intelligence To Get Insights Into Our Businesses' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_Eigth} description='an image of an employed' title='Business' text='Apple Has Released New Products. Are They Any Good?' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                    <ArticlesItem  ImageScr={Group_nine} description='an image of an employed' title='Business' text='How To Improve Your Teams And Get A Better Result' text2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' />
                 

                </div>
                <div className="pagination">
                    <img src={Pagination}alt="images of a dot" />
                </div>
            </div>
    </article>
  )
}

export default NewsArticle