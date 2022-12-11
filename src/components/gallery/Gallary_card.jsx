import React from "react";

const Gallary_card = (props) => {
  return (
    <>
      <div className="card m-4" >
        <div className="card bg-light text-white" style={{ width:"22rem", minHeight:"32rem", overflow:"hidden"}}>
          <img src={props.imagesrc} style={{height:"20rem"}} className="card-img img-fluid" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title text-center" style={{marginTop:"20rem", color:"black", fontWeight:"bold"}}>{props.title}</h5>
            <p className="card-text text-center" style={{ color:"black"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dignissimos repellat accusamus corrupti laborum ratione labore eligendi tenetur, distinctio ut adipisci, odio sunt asperiores doloremque quibusdam facere obcaecati veniam tempora nobis, minus voluptatum eos impedit consequuntur sed! Illo tenetur eum dolorem magni. Quia eius, earum neque eos architecto ullam praesentium.
            </p>
            <p className="card-text text-right" style={{color:"black"}}>Photo uploaded on - {props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_card;
