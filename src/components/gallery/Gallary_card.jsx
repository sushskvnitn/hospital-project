import React from "react";

const Gallary_card = (props) => {
  return (
    <>
      <div className="card m-2" >
        <div class="card bg-dark text-white " style={{ width:"25rem"}}>
          <img src={props.imagesrc}   class="card-img img-fluid" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title" >{props.title}</h5>
            <p class="card-text">
              {props.desc}
            </p>
            <p class="card-text">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_card;
