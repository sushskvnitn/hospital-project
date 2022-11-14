import React from "react";

const Gallary_card = (props) => {
  return (
    <>
      <div className="card m-4" >
        <div className="card bg-dark text-white " style={{ width:"22rem"}}>
          <img src={props.imagesrc}   className="card-img img-fluid" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title" >{props.title}</h5>
            <p className="card-text">
              {props.desc}
            </p>
            <p className="card-text float-end align-text-bottom ">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_card;
