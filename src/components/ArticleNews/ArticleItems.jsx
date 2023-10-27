import React from 'react'


const ArticleItems = ({ImageSrc, description, title, text, fras}) => {

  return (
         <div className="items">
             <img src={ImageSrc} alt={description} />
             <div className="item">
                 <p>{title}</p>
                 <h2>{text}</h2>
                 <p>{fras}</p>
             </div>
        </div>
  )
}

export default ArticleItems