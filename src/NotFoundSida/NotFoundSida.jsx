import React from 'react';
import './NotFoundSida.css'
import Dead from '../assets/images/grim.jpg';
// import Dog from '../assets/images/hund.jpg'
import { Link } from 'react-router-dom';

const NotFoundSida = () => {
  const handleReturnClick = () => {
    // Lägg till din återvändande logik här
  };

  return (
    <main className='container'>
      <div className='container-notfound'>
        <h2>404 Page Not Found</h2>
        <div className="dead">
         
           <img src={Dead} alt="Dead image" />
        </div>
        <div className="notfound">
             {/* <h2>404 Page Not Found</h2> */}
              {/* <button className='' onClick={handleReturnClick}></button> */}
             <Link className="btn-theme" onClick={handleReturnClick} to="/">Klicka Här För Att Återvända<i className="mindre fi fi-br-arrow-up-right"></i></Link>
        </div>
        
      </div>
    </main>
  );
};

export default NotFoundSida;
