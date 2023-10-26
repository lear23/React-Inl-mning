import React from 'react'

const ChooseBoxes = ({ImageSrc, title, text}) => {
  return (
    <div className="boxes">
        <div className="box-image">
            <img src={ImageSrc} alt="" />
        </div>
        <div className="box">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ChooseBoxes