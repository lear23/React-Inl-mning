import React from 'react'
import '../../main.css'

const Buttons = ({type, text, url, showIcon = true }) => {

  const buttonColor = () => {

    switch(type) {
      case 'black':
        return 'btn-black'        
      case 'transparent':
        return 'btn-transparent'
      case 'grey':
        return 'btn-grey'
      default:
        return 'btn-theme'
        
       
    }

  }

  return (

    <> 
            <a className={buttonColor()} href={url}>
                {text}
                {showIcon && <i className="mindre fi fi-br-arrow-up-right"></i>} 
            </a>
        
    </>
  )
}

export default Buttons