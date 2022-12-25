import React from "react";
import "./services.css"
const ServiceCards = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 equal-height " >
        <div className="item" style={{
            height: "30rem",
      }}>
     
          <i > <img alt="Icon" className="img-fluid p-3 invert"   src={props.icon}/></i>
          <h4>{props.title}</h4>
          <p>
           {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
