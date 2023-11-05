import React from 'react'

const BoxSection = ({ImageScr, description,title, url, text }) => {

    
  return (
        <div className="box1">
            <img src={ImageScr} alt={description} />
            <h2>{title}</h2>
            <a href={url}>
                <p>{text}</p>
            </a>
        </div>
  )
}

export default BoxSection