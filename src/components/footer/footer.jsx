import React from 'react'
import Photo from "../../images/logo2.png";
import { Link } from 'react-router-dom';
import "./footer.css"
const Footer = () => {
  return (
    <>
  
<footer className=" text-center text-white" style={{ backgroundColor:"#043d78"}}>
<div className="container p-4">
   <div className="row">
      
      <div className="col-lg-6 mt-5 mt-md-0 col-md-12 mb-4 mb-md-0">
      <Link className="bg-white p-md-4 rounded shadow float-right">
      <img src={Photo} className="img-fluid" width="30%" alt="" />
      </Link>
      </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase my-5">working hours</h5>
        <p> Mon-Fri</p>
        <p>9 AM-12PM and 2PM-5PM</p>

      </div>
    </div>
  </div>

  <div className="text-center p-3 text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:
    <a className="text-white" href="https://sanjeevanarc.com">sanjeevanarc.com</a>
  </div>
</footer>

    </>
  )
}

export default Footer