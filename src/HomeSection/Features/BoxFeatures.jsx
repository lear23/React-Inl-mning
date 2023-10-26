import React from 'react'

const BoxFeatures = ({title, text,ImageSrc}) => {
  return (
   
    <div>
        <div >
            <img src={ImageSrc} alt="startup business" />
        </div>
      
        <h3>{title}</h3>
        <p>{text}</p>
    </div>

    
  )
}

export default BoxFeatures