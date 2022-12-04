import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ticker from "./Ticker";
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
        <div className="box"  data-aos-duration="1500" data-aos="zoom-in" >
          <Ticker update="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum fuga veniam veritatis?" />
          <Ticker update="Lorem, ipsum dolor sitt. Aliquam nostrum fuga veniam veritatis?" />
          <Ticker update="Lorem, ipsum dolor sit amet consectetu nostrum fuga veniam veritatis?" />
        </div>
      </div>
    </>
  );
};

export default updates;
