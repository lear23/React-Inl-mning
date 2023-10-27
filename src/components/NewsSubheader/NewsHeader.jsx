import React from 'react'

const NewsHeader = ({url, url2, title, ImagesScr}) => {
  return (
    <div>
         <a href={url}>Home</a>
        <a href={url2}>News</a>
        <h2>{title}</h2>
        <div className="line">
            <img src={ImagesScr} alt="a line " />
        </div>
    </div>
  )
}

export default NewsHeader