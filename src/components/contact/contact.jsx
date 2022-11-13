import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Contactform from './contact_form';
const contact = () => {
  return (
    <>
    <div className="contact2" id="contact">
      <h1 className ="text-center">contact us</h1>
    <iframe title="map" className="map d-lg-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7321637801706!2d79.04932381473319!3d21.123241685947264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c070e8004c25%3A0xdcfcc32c89158bc3!2sVisvesvaraya%20National%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1668343128500!5m2!1sen!2sin" width="390" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <iframe title="map" className="map d-none d-lg-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7321637801706!2d79.04932381473319!3d21.123241685947264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c070e8004c25%3A0xdcfcc32c89158bc3!2sVisvesvaraya%20National%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1668343128500!5m2!1sen!2sin" width="1500" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row rounded" style={{marginTop :"-200px", backgroundColor:"white" }} >
            <Contactform/>
            <div className="col-lg-4 bg-image" style={{ backgroundImage :"url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)"}}>
              <div className="detail-box p-4">
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7">601 Sherwood Ave.
                  <br/> San Bernandino</p>
                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-white op-7">251 546 9442
                  <br/> 630 446 8851</p>
                <div className="round-social light">
                  <a href="/" className="ml-0 text-decoration-none text-white m-1"><FacebookIcon/></a>
                  <a href="/" className="text-decoration-none text-white m-2"><TwitterIcon/></a>
                  <a href="/" className="text-decoration-none text-white m-2"><InstagramIcon/></a>
                </div>
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