import React from 'react'
import './Choose.css'
import ChooseBoxes from './ChooseBoxes'
import Image_one from '../../assets/images/image-1.svg'
import Image_two from '../../assets/images/image-2.svg'
import Image_three from '../../assets/images/image-3.svg'
import Image_four from '../../assets/images/image-4.svg'
import Womens_Image from '../../assets/images/image-two-women.png'


const Choose = () => {
  return (

        <div className="container">
            <div className="choose">
                <div className="box-1">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The <br/> Best Business <br/> Consulting Agency</h2>
                    <ChooseBoxes ImageSrc={Image_one} title="Process Excellence"  text="Lorem ipsum dolor sit amet consectetur." />
                    <ChooseBoxes ImageSrc={Image_two} title="Strategic Planning"  text="Lorem ipsum dolor sit amet consectetur." />
                    <ChooseBoxes ImageSrc={Image_three} title="Experience Design"  text="Lorem ipsum dolor sit amet consectetur." />
                    <ChooseBoxes ImageSrc={Image_four} title="Artificial Inteligence"  text="Lorem ipsum dolor sit amet consectetur." />
                    
                </div>
                <div className="parent-2">
                    <div>
                        <img src={Womens_Image} alt="two women talking" />
                    </div>
                    <div className="line3">
                        <h2>Why <br/> Choose <br/> Us?</h2>
                    </div>
    
    
                </div>
           </div>
        </div>


  )
}

export default Choose