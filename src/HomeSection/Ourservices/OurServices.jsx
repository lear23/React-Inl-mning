import React from 'react'
import './OurServices.css'
import TargetServices from './TargetServices'
import Line_Ourservices from '../../assets/images/Element.png'

const OurServices = () => {
  return (
  
<section class="our-services">


    <div class="container">
        <div class="row-services">
            <p>Our services</p>
            <h2>We Provide The Best <br /> Service For Consulting</h2>
        </div>
        <div class="service">
          <TargetServices title="Business Advice" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'} url="/services/businessadvice" />
          <TargetServices title="Startup Business" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'} url="/services/startupbusiness"/>
          <TargetServices title="Financial Advice" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'} url="/services/finacialadvice"/>
          <TargetServices title="Risk Management" text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae.'} url="/services/riskmanagement" />

        </div>
        <div class="center-content">
            <a class="btn-transparent" href="projects.html">Browse Service<i
                    class="mindre fi fi-br-arrow-up-right"></i></a>

        </div>
        <div class="line">
            <img src={Line_Ourservices} alt="a decorative line" />
        </div>
    </div>
</section>
    
  )
}

export default OurServices