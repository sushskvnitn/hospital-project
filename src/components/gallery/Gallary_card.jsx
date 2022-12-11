import React from "react";
import "./gallary.css";
const Gallary_card = (props) => {
  return (
    <>
      <div className="card m-4" >
        <div className="card bg-light text-white figure" style={{ width:"22rem", minHeight:"32rem"}}>
          <img src={props.imagesrc} style={{height:"20rem"}} className="card-img img-fluid" />
          <div className="card-img-overlay figcaption">
            <h3 className="card-title text-center" style={{marginTop:"20rem", color:"black", fontWeight:"bold"}}>{props.title}</h3>
            <p className="card-text text-center" style={{ color:"black"}}>
              </p>
            <p className="card-text text-right" style={{color:"black"}}>Photo uploaded on - {props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_card;
