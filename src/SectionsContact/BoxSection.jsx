import React from 'react';
import { Link } from 'react-router-dom';

const BoxSection = ({ ImageScr, description, title, url, text }) => {
  return (
   
   <div className="box1">
      <Link to={url} >
      <img src={ImageScr} alt={description} />
      </Link>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default BoxSection;
