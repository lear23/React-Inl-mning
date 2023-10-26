import React from 'react'
import './ShowCase.css'
import LineImages from '../../assets/images/Element-header.svg'
import Manimage from '../../assets/images/Image1.svg'

const ShowCase = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <h1>We provide the best Business solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes </p>
            <div className="buttons-showcase">
                <a className="btn-theme" href="consulting.html">Get Consulting<i
                        className="mindre fi fi-br-arrow-up-right"></i></a>
                <a className="btn-transparent" href="sercices.html">Learn More<i
                        className="mindre fi fi-br-arrow-up-right"></i></a>
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