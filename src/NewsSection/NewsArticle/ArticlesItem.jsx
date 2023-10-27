import React from 'react'

const ArticlesItem = ({ ImageScr, description, title, text,text2 }) => {
  return (
    <div className="items items1">
        <img src={ImageScr} alt={description} />
        <div className="item">
            <p>{title}</p>
            <h2>{text}</h2>
            <p>{text2}</p>
        </div>
    </div>
  )
}

export default ArticlesItem