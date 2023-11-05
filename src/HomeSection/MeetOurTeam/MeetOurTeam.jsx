import React from 'react'
import './MeetOurTeam.css'
import Buttons from '../../components/buttons/Buttons'
import ImgOfOurTeam from './ImgOfOurTeam'
import Team_Image from '../../assets/images/team1.png'
import Team_Image2 from '../../assets/images/team2.png'
import Team_Image3 from '../../assets/images/team3.png'
import Team_Image4 from '../../assets/images/team4.png'
import dot2 from '../../assets/images/dot.png'

const MeetOurTeam = () => {
  return (
   
    <section className="meet-our-team">
            <div className="container">
                <div className="team">
                    <p>Meet Our Team</p>
                    <div className="team-title">
                        <h2>Experience Team Members</h2>
                        <Buttons url='/Contact'  text='Browse Team' />
                    </div>
                </div>
                <div className="team-images">

                    <ImgOfOurTeam ImageSrc={Team_Image} description='images of our team' title='Kristine Palmer' text='Chef Operation Officer' />
                    <ImgOfOurTeam ImageSrc={Team_Image2} description='images of our team' title='Mark Aubri' text='Senior Consultant' />
                    <ImgOfOurTeam ImageSrc={Team_Image3} description='images of our team' title='Kimberly Hansen' text='Senior Consultant' />
                    <ImgOfOurTeam ImageSrc={Team_Image4} description='images of our team' title='Justin Willoman' text='Senior Tech Consultant' />
                  
                </div>
                <div className="dot2">
                    <img src={dot2} alt="a dot image" />
                </div>

            </div>

     </section>       
  )
}

export default MeetOurTeam