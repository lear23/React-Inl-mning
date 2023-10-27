import React from 'react';

const SectionSubheader = ({ url,url2, title,title2, text, imageSrc, description }) => {
  return (
    <>
      <a href={url}>{title}</a>
      <a href={url2}>{title2}</a>
      <h2>{text}</h2>
      <div className="line">
        <img src={imageSrc} alt={description} />
      </div>
    </>
  );
};

export default SectionSubheader;
