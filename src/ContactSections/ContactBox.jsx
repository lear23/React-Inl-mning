import React from 'react'

const ContactBox = ({ImageScr, description, title, url,target, text}) => {
  return (
    <div className="box1">
        <img src={ImageScr} alt={description}/>
        <h2>{title}</h2>
        <a href={url} target={target}>
            <p>{text}</p>
        </a>
    </div>
  )
}

export default ContactBox