import React from 'react'
import Contactform from './contact_form';
const contact = () => {
  return (
    <>
    <div className="contact2 marn-top" >
      <h1 className ="text-center"  > <b> Contact us </b> </h1>
      <div className="d-flex justify-content-center" >
        <iframe title="map" className="map d-lg-none" src="" width="390" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <iframe title="map" className="map d-none d-lg-block" src="" width="1500" height="500" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                  <br/> 502,shreeyash (5th floor), above 'first cry', 95 East High court Road ,Ramdaspeth <br /> nagpur -440010 </p>
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