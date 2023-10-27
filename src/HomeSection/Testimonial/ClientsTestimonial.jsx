import React from 'react'

const ClientsTestimonial = ({ImageSrc, description, text,imageSrc2, title,fras}) => {
  return (
    
<div className="clients">
    <img src={ImageSrc} alt={description} />
    <p>{text}</p>
    <div className="customers">
        <img src={imageSrc2} alt={description} />
        <div className="img-customer">
            <h3>{title}</h3>
            <span>{fras}</span>
        </div>
    </div>
</div>
  )
}

export default ClientsTestimonial