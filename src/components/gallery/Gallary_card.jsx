import React from "react";

const Gallary_card = () => {
  return (
    <>
      <div className="card " >
        <div class="card bg-dark text-white" style={{ width:"25rem"}}>
          <img src="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"   class="card-img img-fluid" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary_card;
