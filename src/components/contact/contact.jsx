import React from 'react'
import Contactform from './contact_form';
const contact = () => {
  return (
    <>
    <div className="contact2 marn-top" >
      <h1 className ="text-center"  > <b> Contact us </b> </h1>
      <div className="d-flex justify-content-center" >
        <iframe title="map" className="map d-lg-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4256400999966!2d79.06903!3d21.1354529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0893c950247%3A0x73188ded64c1f355!2sPeople&#39;s%20Gym!5e0!3m2!1sen!2sin!4v1672067129596!5m2!1sen!2sin" width="390" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <iframe title="map" className="map d-none d-lg-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4256400999966!2d79.06903!3d21.1354529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0893c950247%3A0x73188ded64c1f355!2sPeople&#39;s%20Gym!5e0!3m2!1sen!2sin!4v1672067129596!5m2!1sen!2sin" width="1500" height="500" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row rounded" style={{marginTop :"-200px", backgroundColor:"white" }} >
            <Contactform/>
            <div className="col-lg-4 bg-image" style={{ backgroundImage :"url(https://i.postimg.cc/cJSfkn2W/contact.png)" }}>
              <div className="detail-box p-4 " id="contact">
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7">Sanjeevan Advanced Rheumatology Centre
                  <br/> 502,shreeyash,95 East High court Road ,Ramdaspeth <br /> nagpur -440010 </p>
                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-white op-7">
                  <br/>+91 9511718948 </p>
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default contact