import React from 'react'

const ImgOfOurTeam = ({ImageSrc, description, title, text}) => {
  return (
    <div className="img-team">
        <img src={ImageSrc} alt={description} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ImgOfOurTeam