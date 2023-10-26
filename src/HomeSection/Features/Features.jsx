import React from 'react'
import './Features.css'
import BoxFeatures from './BoxFeatures'
import Business_image from '../../assets/images/Business Advice.png'
import Startup_image from '../../assets/images/Startup Business.png'
import Financial_image from '../../assets/images/financial advice.png'
import Management_image from '../../assets/images/Risk Management.png'


const Features = () => {
  return (
    <>
      
        <div className="container parent">
            <div className="features">
                <div className="features-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <a className="btn-theme" href="consulting.html">Learn More<i
                            className="mindre fi fi-br-arrow-up-right"></i></a>
                </div>
            </div>
            <div className="boxes">

                <div className="box">
                   
                    <BoxFeatures title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." ImageSrc={Business_image} />
                    
                </div>

                <div className="box">
                   
                    <BoxFeatures title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." ImageSrc={Startup_image}  />

                </div>

                <div className="box ">

                    <BoxFeatures title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." ImageSrc={Financial_image } />

                </div>
                <div className=" box">

                    <BoxFeatures title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." ImageSrc={Management_image} />

                </div>

            </div>
        </div>

    </>
  )
}

export default Features