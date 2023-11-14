import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticleCarousel.css';
import Carousel from './Carousel';
import group from '../../assets/imagesCarousel/group.png';
import Group2 from '../../assets/imagesCarousel/Group2.png';
import Group3 from '../../assets/imagesCarousel/Group3.png';
import Group4 from '../../assets/imagesCarousel/Group4.png';
import Group5 from '../../assets/imagesCarousel/Group5.png';
import Group6 from '../../assets/imagesCarousel/Group6.png';
import Group7 from '../../assets/imagesCarousel/Group7.png';
import Group8 from '../../assets/imagesCarousel/Group8.png';
import Group9 from '../../assets/imagesCarousel/Group9.png';

const ArticleCarousel = ({ backgroundColor }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop(); 
  }, [currentPage]);

  const carouselData = [
    { image: group, title: 'Business', text: 'How To Use Digitalization In The Classroom', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group2, title: 'Business', text: 'How To Implement Chat GPT In Your Projects', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group3, title: 'Business', text: 'The Guide To Support Modern CSS Design', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group4, title: 'Business', text: 'Why You Need To Implement The Five S\'s', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group5, title: 'Business', text: 'Get More Involved With Your End Users', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group6, title: 'Business', text: 'Get More Involved With Your End Users', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group7, title: 'Business', text: 'Using Business Intelligence To Get Insights Into Our Businesses', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group8, title: 'Business', text: 'Apple Has Released New Products. Are They Any Good?', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
    { image: Group9, title: 'Business', text: 'How To Improve Your Teams And Get A Better Result', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.' },
  ];

  const totalPages = Math.ceil(carouselData.length / itemsPerPage);

  return (
    <article style={{ backgroundColor }}>
      <div className="container">
        <div className="news-article">
          <div className="title">
            <p>Article & News</p>
            <h2>Get Every Single Articles & News</h2>
          </div>
          <Link to="/News" className="btn-theme" onClick={scrollToTop}>
            Browse Next<i className="mindre fi fi-br-arrow-up-right"></i>
          </Link>
        </div>

        <div className="new-image">
          {carouselData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
            <Carousel key={index} image={item.image} title={item.title} text={item.text} description={item.description} />
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={index === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleCarousel;

