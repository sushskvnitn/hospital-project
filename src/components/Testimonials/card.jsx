import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const card = (props) => {
  AOS.init();
  return (
    <>
      <div
        className="card m-2 col-md-4 mb-5 mb-md-0 rounded"
        style={{
          width: "18rem",
        }}
        data-aos="flip-left"
        data-aos-duration="2000"
        key={props.id}

      >
        <div className="d-flex justify-content-center mb-4">
          {/* <img
            src={props.image}
            className="rounded-circle shadow-1-strong"
            alt="testimonials"
            width="150"
            height="150"
          /> */}
        </div>
        
        <p className="px-xl-3 fs-5 fst-italic fw-lighter">
          {props.description} <FormatQuoteIcon />
        </p>
        <h5 className="mb-3">-{props.name}</h5>
        <ul className="list-unstyled d-flex justify-content-center mb-0 star_color"  >
          {new Array(Math.floor(props.rate)).fill(null).map(() => (
            <StarIcon />
          ))}
          <br />
          <br />
        </ul><h6 className="text-primary mb-3">{props.job}</h6>
      </div>
    </>
  );
};

export default card;
