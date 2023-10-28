import React from 'react';
import './NotFoundSida.css'
import Dead from '../assets/images/grim.jpg';
import { Link } from 'react-router-dom';

const NotFoundSida = () => {
  const handleReturnClick = () => {
    // Lägg till din återvändande logik här
  };

  return (
    <main>
      <div className='container-bild'>
        <img src={Dead} alt="Dead image" />
        <h2>404 Page Not Found</h2>
        {/* <button className='' onClick={handleReturnClick}></button> */}
        <Link className="btn-theme" onClick={handleReturnClick} to="/">Klicka Här För Att Återvända<i className="mindre fi fi-br-arrow-up-right"></i></Link>
      </div>
    </main>
  );
};

export default NotFoundSida;
