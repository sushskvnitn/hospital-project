import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
const about = () => {
  AOS.init();
  return (
    <div className="marn-top">
    <h1 className ="text-center blue_color pt-4"> <b> About us </b></h1>
    <section className="about-section " data-aos="fade-down" >
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About our Hospital</span>
                            <h2> Inspired by the past, aspiring for a great future </h2>
                        </div>
                        <div className="text">Starting on the first working day of year 2023, this new venture Sanjeevan Advanced Rheumatology Centre inherits it’s spirit from our beloved Sanjeevan hospital (Latur) that has tried it’s best to cater to the healthcare needs of not just the town of Latur, but the entire region of Marathwada and north-east Karnataka for last 3 decades. </div>
                      <div className="text">
                      Keeping our principle of providing a compassionate care to the needy in our hearts and minds, we also aim to be a full-fledged rheumatology centre that should be capable of providing all-round rheumatology and immunology services to the Nagpur and to the greater central India region.  </div>
                      <div className="text"> 
 To achieve this aim, we believe in collaborating with national and international masters in the field and to enhance the knowledge through collaborative clinical 
 research giving as much importance as we give to attaining top quality patient care. Afterall, the most effective way by which a sincere doctor can help his/ her own patients is by achieving the cutting edge knowledge about the disease and it’s management ! </div>
                        <div className="btn-box">
                            <Link to="/contactus" className="btn dark_blue text-white ">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column  fadeInLeft">
                      <div className="author-desc">
                        <h2>Dr. SALIL A. GANU</h2>
<span>MBBS, MD (Medicine) <br />
DM (Rheumatology and Clinical Immunology) <br />
Post Doctoral Fellow (CMC Vellore) <br /> </span>
                      </div>
                      <div className="d-lg-none testimg"><img title="Rahul Kumar Yadav" src="https://images.unsplash.com/photo-1666214276372-24e331683e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width="80%" className='img-fluid rounded imgtest'  alt=""/>
                     </div>
<div className="d-none d-lg-block"><figure className=""><img title="Rahul Kumar Yadav" src="https://images.unsplash.com/photo-1666214276372-24e331683e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='img-fluid' alt=""/></figure>
                        </div>
                        
                    </div>
                </div>
              
            </div>
           <div className="sec-title marn-top">
                            <span className="title marn-top">Our vision</span>
                            <h2>We want to lead in Rheumatology </h2>
                        </div>
          <div className="text">
          To build a prime institute that is a leader in central India in rheumatology 
          and immunology related patient care and medical research. 
          </div>
          <div className="text">
          No one from this region should need to travel elsewhere for
           management of these diseases !</div>
               <div className="text">
In the end, I would say it's with your support that we can walk a journey of a healthy future.
              </div>
        </div>
    </section>
 
   </div>
  )
}

export default about