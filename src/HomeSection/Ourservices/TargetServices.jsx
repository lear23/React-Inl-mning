import React from 'react'

const TargetServices = ({title, text, url}) => {
  return (
    <div className="tarjet">
        <hr />
        <h4>{title}</h4>
        <p>{text}</p>
        <a href={url}><i className="fi fi-sr-arrow-circle-right"></i></a>
    </div>
  )
}

export default TargetServices