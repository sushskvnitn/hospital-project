import React from 'react'
import { useLocation } from "react-router-dom";
import Seviceimg from '../../images/s2.png'

const ReadmoreServices = () => {
      const location = useLocation();
      const withBreaks =location.state.pointdescription.split("•").map((item, i) => { return <li  key={i}>{item} <br /></li> });
 
  return (
    <div className="marn-top">
    <div className="m-2" style={{ position: 'absolute'  }} >
       <h1 className="title-4 strong text-white   " >
            <b>
                  Our Service
            </b>   
      </h1>
      <div class="d-lg-none"><h6 className=" text-center text-white"  ><img src={location.state.icon} style={{
                  filter: "invert(100%)", width: "80", height: "800"
            }} className="img-fluid img-centered " alt="" />{location.state.title}</h6> </div>
<div class="d-none d-lg-block"> <h5 className=" text-center text-white"  ><img src={location.state.icon} style={{
                  filter: "invert(100%)",
            }} className="img-responsive img-centered " alt="" />{location.state.title}</h5> </div>
     
    </div>
      <img src={Seviceimg} className="img-fluid img-centered"alt="" srcset="" />
      <h2 className='mx-5'>
          <b>  Description : </b>  
      </h2> <div className="d-flex justify-content-center">
     
      <p className="text-dark w-75">
            {location.state.description}
      </p>

    </div>
    <div className="d-flex justify-content-center">
      <p className="text-justify" style={{
            marginTop: "0.5rem",
            width:"60%",
    }}>
            {withBreaks}
      </p>
    </div>
      
    </div>
  )
}

export default ReadmoreServices