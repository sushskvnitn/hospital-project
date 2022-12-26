import React from "react";
import { useLocation } from "react-router-dom";
import "./doctorpage.css";
import AOS from 'aos'
const Doctorspage = () => {
  AOS.init();
  const location = useLocation();
  const withBreaks =location.state.experiance.split("•").map((item, i) => { return <li  key={i}>{item} <br /></li> });
 
  return (
    <div className="marn-top">
      <div >
        <div style={{ overflow: 'hidden' }}  >
         <h2 className="text-center bg-white" style={{position: 'absolute',zIndex:"1"}}  >
        Our Professional DR. {location.state.name}
      </h2>
          <div className="" >
            <div className="panel panel-white profile-widget">
              <div className="row" data-aos="fade-down" 
   data-aos-delay="1500"  data-aos-duration="1500" >
                <div className="col-sm-12">
                  <div className="image-container bg2">
                    <img
                      src={location.state.image}
                      className="avatar"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="details">
                    <h3> <b>
                    DR. {location.state.name} </b>
                    </h3>
                    <div> <b>{location.state.subdesc} </b>  </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="container">
            <div className="row " data-aos="fade-up" 
     data-aos-duration="2000" >
            <div className="col-sm-6 ">
            <div className="panel bg-light  border-bottom-blue">
                  <div className="panel-heading dark_blue text-white">
                    <h3 className="mx-4">Doctor Info</h3>  
                  </div>
                  <div className="panel-body">
                    <div className="body-section mx-4">
                      <h4 className="section-heading">Name</h4>
                      <h5 className="section-content">DR. {location.state.name}</h5>
                    </div>
                    <div className="body-section mx-4">
                    {location.state.address ? <div>
                       <h4 className="section-heading"><b>Address</b> </h4>
                      <h5 className="section-content">
                      { location.state.address}
                      </h5>
                    </div> :""}
                    </div>
                    {location.state.email?<div className="body-section mx-4">
                      <h4 className="section-heading">Email</h4>
                      <h5 className="section-content">{location.state.email}</h5>
                    </div> :""}
                    {location.state.website?<div className="body-section mx-4">
                      <h4 className="section-heading">Website</h4>
                      <h5 className="section-content">{ location.state.website }</h5>
                    </div> :""}
                  </div>
                </div>
              </div>


              <div className="col-sm-6">
                <div className="panel bg-light  border-bottom-blue">
                  <div className="panel-heading dark_blue text-white">
                    <h3 className="mx-4">My Story</h3>
                  </div>
                  <div className="panel-body">
                    <div className="body-section mx-4">
                      <h4 className="section-heading">Experience</h4>
                      <h5 className="section-content">{withBreaks}</h5>
                    </div>
                    <div className="body-section mx-4">
                      <h4 className="section-heading">Acheivements</h4>
                      <h5 className="section-content">
                        {location.state.achievement}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorspage;
