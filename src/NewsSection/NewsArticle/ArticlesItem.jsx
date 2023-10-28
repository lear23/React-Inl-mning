import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesItem = ({ ImageScr, description, title, text,text2 }) => {
  return (
     
      <div className="items items1"> 
       <Link to='/NewsDetails' >            
            <img src={ImageScr} alt={description} />         
      </Link> 
              <div className="item">
           
                <p>{title}</p>
                <h2>{text}</h2>
                <p>{text2}</p>
                
            </div>                  
      </div>
    
   
  )
}

export default ArticlesItem