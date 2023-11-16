import React from 'react';
import './Subheader.css'
import Rectangle from '../../assets/ImagesContact/Rectangle607.png';
import SectionSubheader from './SectionSubheader';

const SubHeader = () => {
  return (
    <section className="subheader">        

        <SectionSubheader url='/' url2='./Contacts' text="Let's Connect" title='Home' title2='Contacts' imageSrc={Rectangle} />
   
    </section>
  );
}

export default SubHeader;
