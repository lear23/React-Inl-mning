import React from 'react'
import './ArticleSection.css'
import ArticleBox from './ArticleBox'
import OvalCopy from '../assets/imagesNewsDetails/Oval-Copy.png'
import Woman_Image from '../assets/imagesNewsDetails/Image.png'
import zoom_out from '../assets/imagesNewsDetails/zoom-out.png'
import Coma from '../assets/imagesNewsDetails/Group1.png'
import Buttons from '../components/buttons/buttons'


const ArticleSection = () => {
  return (
    <main className="container">
        <div className=" classroom">
            <h2>How To Use Digitalization <br/>
                In The Classroom
            </h2>
            <div className="date">
                <p>Mar 25, 2023</p>
                <p><img src={OvalCopy} alt="a dot" />Business</p>
                <p><img src={OvalCopy} alt="a dot" />Kimberly Hansen</p>
            </div>
        </div>
        <div className="container">
            <section className="employee">
                <div className="work">
                    <img src={Woman_Image} alt="the image of an employee" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                        posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna
                        eros quis urna. <br/>

                        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet
                        nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                        Mauris eget neque at sem venenatis eleifend. Ut nonummy. <br/>

                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                        posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna
                        eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy
                        pede. Mauris et orci. <br/>

                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque
                        at sem venenatis eleifend. Ut nonummy.

                    </p>

                </div>
                <div className="articles">
                
                    <form  className="search">
                        <img src={zoom_out} alt="a zoom-image" />
                        <input type="text" placeholder="Type of search..." />
                    </form>
                    <div className="article-box">
                        <h2>Recent Posts</h2>
                       
                        <ArticleBox text='How To Blow Through Capital At An Incredible Rate' date='Jan 14, 2020' />
                        <ArticleBox text='Design Studios That Everyone Should Know About? ' date='Jan 14, 2020' />
                        <ArticleBox text='How did we get 1M+ visitors in 30 days without anything!' date='Jan 14, 2020' />
                        <ArticleBox text='Figma On Figma: How We Built Our Website Design System' date='Jan 14, 2020' />
                       

                    </div>
                    <div className="article-box2">
                        <h2>Categories</h2>
                        <p><b>Technology -</b> 20 Posts</p>
                        <p><b>Freelancing -</b> 07 Posts</p>
                        <p><b>Writing - </b>16 Posts</p>
                        <p><b>Marketing -</b> 11 Posts</p>
                        <p><b>Business -</b>35 Posts</p>
                        <p><b>Education - </b>14 Posts</p>
                    </div>
                </div>
            </section>
        </div>
        <section className="coma">
            <img src={Coma} alt="coma image" />
            <h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros
                quis urna.
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,
                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc
                viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. </p>

            <div className="buttons">
                <Buttons type='grey' text='Digital' showIcon={false} url='/'/>
                <Buttons type='grey' text='School' showIcon={false} url='/'/>
                <Buttons type='grey' text='It' showIcon={false} url='/'/>
                <Buttons type='grey' text='Design' showIcon={false} url='/'/>
                <Buttons type='grey' text='Work' showIcon={false} url='/'/>
                <Buttons type='grey' text='Tech' showIcon={false} url='/'/>
                <Buttons type='grey' text='Digital' showIcon={false} url='/'/>
            </div>

        </section>

</main>
  )
}

export default ArticleSection