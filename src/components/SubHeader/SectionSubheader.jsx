import React from 'react';
import { Link } from 'react-router-dom'; 

const SectionSubheader = ({ url, url2, title, title2, text, imageSrc, description }) => {
  return (
    <>
      <Link to={url}>{title}</Link>
      <Link to={url2}>{title2}</Link>
      <h2>{text}</h2>
      <div className="line">
        <img src={imageSrc} alt={description} />
      </div>
    </>
  );
};

export default SectionSubheader;

