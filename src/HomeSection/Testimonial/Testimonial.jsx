import React from 'react'
import './Testimonial.css'
import Start from '../../assets/images/Star.png'
import Customer_one from '../../assets/images/customer1.png'
import Customer_two from '../../assets/images/customer2.png'
import Customer_three from '../../assets/images/customer3.png'
import ClientsTestimonial from './ClientsTestimonial'

const Testimonial = () => {
  return (
        <section class="meet-our-team">
           <div className="testimonial">
                <div className="container">
                    <div className="client-says">
                        <p>Testimonial</p>
                        <h2>What Our Clients Says</h2>
                    </div>
                    <div className="customers-rating">

                        <ClientsTestimonial ImageSrc={Start} description='customer stars' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate"' imageSrc2={Customer_one} title='Business Manager, Dorfus' fras='Business Manager, Dorfus' />
                        <ClientsTestimonial ImageSrc={Start} description='customer stars' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate"' imageSrc2={Customer_two} title='Amanda Tulling' fras='Senior Developer, Square' />
                        <ClientsTestimonial ImageSrc={Start} description='customer stars' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate" ' imageSrc2={Customer_three} title='Jack McDogglas' fras='Key Account Manager, Gobona' />

                    </div>
                    <div className="black-button">
                        <a className="btn-black" href="projects.html">All Reviews<i
                                className="mindre fi fi-br-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
        </section>    
  )
}

export default Testimonial