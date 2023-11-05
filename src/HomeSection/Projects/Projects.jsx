import React from 'react'
import './Projects.css'
import Buttons from '../../components/buttons/Buttons'
import ProjectsArticle from './ProjectsArticle'
import Article_one from '../../assets/images/article-image1.png'
import Article_Two from '../../assets/images/image2.png'
import Article_Three from '../../assets/images/image3.png'
import Article_Four from '../../assets/images/image4.png'

const Projects = () => {
  return (
        <section className="projects">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Looks Our Global Projects</h2>
                </div>
                <div className="project-images">
                    <ProjectsArticle imageSrc={Article_one} title='Grow your business' url='#' description='a man with newpaper'/>
                    <ProjectsArticle imageSrc={Article_Two} title='Why your client needs a responsive website' url='#' description='pens and glasses' />
                    <ProjectsArticle imageSrc={Article_Three} title='Educate your employees to get better results' url='#' description='coffe and a notebook' />
                    <ProjectsArticle imageSrc={Article_Four} title='Business Insights is a important piece of your business' url='#' description='a laptop' />

                </div>
                <div className="center-content">
                    <Buttons type='black' url='/news' text='All Recent Projects' />
                </div>
            </div>
        </section>

  )
}

export default Projects