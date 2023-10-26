import React from 'react';
import './Slider.css'
import Logo_images1 from '../../assets/images/Logo1.png'
import Logo_images2 from '../../assets/images/Logo2.png'
import Logo_images3 from '../../assets/images/Logo3.png'
import Logo_images4 from '../../assets/images/Logo4.png'
import Logo_images5 from '../../assets/images/Logo5.png'

const Sliders = () => {

  const imagePaths = [
    Logo_images1,
    Logo_images2,
    Logo_images3,
    Logo_images4,
    Logo_images5,
    Logo_images1,
    Logo_images2,
    Logo_images3,
    Logo_images4,
    Logo_images5,
    Logo_images1,
    Logo_images2,
    Logo_images3,
    Logo_images4,
    Logo_images5,
  ];

  return (
    <div className="container">
      <div className="slider">
        <div className="slide-track">
          {imagePaths.map((imagePath, index) => (
            <div className="slide" key={index}>
              <img src={imagePath} alt="logos of partnerships" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sliders;