import React from 'react'

const Carousel = ({image, title, text, description}) => {
  return (
    <div className="items">
        <img src={image}alt="an image of an employed" />
        <div className="item">
            <p>{title}</p>
            <h2>{text}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Carousel