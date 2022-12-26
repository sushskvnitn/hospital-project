import React from "react";
import "./services.css"
import {useNavigate} from 'react-router-dom'

const ServiceCards = (props) => {
  const navigate = useNavigate()
  const openreadmore = () => {
    navigate('/readmoreservice', {state: { icon: props.icon, title: props.title, description: props.description, pointdescription: props.pointdescription}})
  }
  return (
    <>
      <div className="col-md-4 col-sm-6 equal-height " >
        <div className="item" style={{
            height: "31.5rem",
      }}>
     
          <i > <img alt="Icon" className="img-fluid p-3 invert"   src={props.icon}/></i>
          <h4>{props.title}</h4>
          <p> 
           {props.description.slice(0, 395)}
           {props.description.length > 395 ? "..." : ""}
          </p>
          {/* readmore button here and
        add a link to the service page */}
        <div className="d-flex justify-content-end">
         {props.description.length > 395 ? <u  onClick={openreadmore} className="text-end nav-link text-dark" style={{ cursor: "pointer" }}  >Readmore</u> : ""}
        </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
