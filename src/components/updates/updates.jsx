import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const updates = () => {
  AOS.init();
  return (
    <>
    <br />
    <span id="updates"></span><br /><br />
    <br />
      <h3 className="mb-4 text-center py-2 "
      data-aos="fade-right" data-aos-duration="1000" >
        Updates
      </h3>
      <div className="d-flex justify-content-center">
        <div className="box"></div>
      </div>
    </>
  );
};

export default updates;
