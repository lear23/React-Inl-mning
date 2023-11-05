import React from 'react'
import './ShowCase.css'
import LineImages from '../../assets/images/Element-header.svg'
import Manimage from '../../assets/images/Image1.svg'
import Buttons from '../buttons/Buttons'

const ShowCase = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <h1>We provide the best Business solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes </p>
            <div className="buttons-showcase">
              <Buttons type='transparent' text='Get Consulting' url='/services/get-consulting'/>
              <Buttons type='transparent' text='Learn More' url='/services/consulting'/>
            </div>
            <div className="line2">
                <img src={LineImages} alt="a line" />
            </div>

        </div>
        <img src={Manimage} alt="showcase image of a man with a table" />

    </div>
</section>
  )
}

export default ShowCase