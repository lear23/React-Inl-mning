import React from 'react'

const ArticleBox = ({text, date}) => {
  return (
    
    <div className="item">
        
        <hr/>
        <h3>{text}</h3>
        <p>{date}</p>
    </div>
  )
}

export default ArticleBox