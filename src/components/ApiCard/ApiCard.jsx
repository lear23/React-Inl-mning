import React from 'react';
import { Link } from 'react-router-dom';
import './ApiCard.css';

const ApiCard = ({ imageUrl, title, content, author, published, category }) => {
  const publishedDate = new Date(published);

  const formattedDate = publishedDate.toISOString().split('T')[0];

  return (
    <div className="items">
      <Link to="/NewsDetails" target="_self" className="card-link">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="items-image" />
          <div className="date-overlay">{formattedDate}</div>
        </div>
      </Link>
      <p className="items-text">{title} {content}</p>
      <h2 className="items-title">{author}</h2>
      <div className="items-details">
        {category}
      </div>
    </div>
  );
};

export default ApiCard;


