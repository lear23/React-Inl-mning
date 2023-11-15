// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ApiCard.css';

// const ApiCard = ({ imageUrl, title, content, author, published, category }) => {
//   const publishedDate = new Date(published);
//   const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(publishedDate);
//   const day = publishedDate.getDate();
//   const formattedDate = `${day} ${monthShort}`;

//   return (
//     <div className="items">
//       <Link to="/NewsDetails" target="_self" className="card-link">
//         <div className="image-container">
//           <img src={imageUrl} alt={title} className="items-image" />
//           <div className="date-overlay">
//             <span className="day">{day}</span>
//             <span className="month">{monthShort}</span>
//           </div>
//         </div>
//       </Link>
//       <div className="items-text">
//         <h3>{title}</h3>
//         <p>{content}</p>
//       </div>
//       <h2 className="items-title">{author}</h2>
//       <div className="items-details">
//         {category}
//       </div>
//     </div>
//   );
// };

// export default ApiCard;



import React from 'react';
import { Link } from 'react-router-dom';
import './ApiCard.css';

const ApiCard = ({ imageUrl, title, content,  published, category }) => {
  const publishedDate = new Date(published);
  const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(publishedDate);
  const day = publishedDate.getDate();
  const formattedDate = `${day} ${monthShort}`;

  return (
    <div className="items">
      <Link to="/NewsDetails" target="_self" className="card-link">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="items-image" />
          <div className="date-overlay">
            <span className="day">{day}</span>
            <span className="month">{monthShort}</span>
          </div>
        </div>
      </Link>
      <div className="items-details">
        <div className='category'>{category}</div>
        <h3>{title}</h3>
        <p>{content}</p>
        {/* <h2 className="items-title">{author}</h2> */}
      </div>
    </div>
  );
};

export default ApiCard;
