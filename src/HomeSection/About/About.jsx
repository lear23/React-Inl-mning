import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Buttons from '../../components/buttons/Buttons';
import Samantha_image from '../../assets/images/Samantha.png';
import Video_icon from '../../assets/images/Video.svg';

const About = () => {
  return (
    <div>
      <section>
        <div className="container about">
          <div className="image-about" id="about">
            <img src={Samantha_image} alt="an image of the founder, Samantha brown" />
            <div className="founder">
              <h3>Samantha Broun, <b>Founder</b></h3>
              <p>"lorem ipsum dolor sit amet consectetur adipisicing elit"</p>
            </div>
          </div>
          <div className="about-company">
            <h5>About Company</h5>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
              obcaecati? Ex esse error voluptates iure vel totam eos.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
              accusantium libero provident voluptate amet.
            </p>
            <div className="button-intro">
              <div className="botton-video">
                <Buttons type="btn-theme" url="/Service" text="Learn More" />
              </div>
              <div className="intro">
                <Link to="/Seervice">
                  <img src={Video_icon} alt="play" />
                  Intro Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
