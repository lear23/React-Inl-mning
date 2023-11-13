import React from 'react';
import './SectionContact.css';
import IconGps from '../assets/ImagesContact/Icon-gps.svg';
import IconPhone from '../assets/ImagesContact/Icon-phone.svg';
import IconEmail from '../assets/ImagesContact/Icon-email.svg';
import BoxSection from './BoxSection';

const SectionContact = () => {
  return (
    <div className="container-section">
      <section className="container">
        <BoxSection
          ImageScr={IconGps}
          description=""
          title=""
          url="https://www.google.com/maps?q=Sveavägen+31+111+34+STOCKHOLM"
          text="Sveavägen 31 111 34 STOCKHOLM"
        />
        <BoxSection
          ImageScr={IconPhone}
          description=""
          title=""
          url="/"
          text="+46(8) 121 470 50 +46(8) 121 470 51"
        />
        <BoxSection
          ImageScr={IconEmail}
          description=""
          title=""
          url="mailto:info@crito.com?subject=Subject&body=Body%20goes%20here"
          text="info@crito.com support@crito.com"
        />
      </section>
    </div>
  );
};

export default SectionContact;
