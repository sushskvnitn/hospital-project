import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const card = (props) => {
  return (
    <>
      <div
        class="card m-2 col-md-4 mb-5 mb-md-0 rounded"
        style={{
          width: "18rem",
        }}
      >
        <div class="d-flex justify-content-center mb-4">
          <img
            src={props.image}
            class="rounded-circle shadow-1-strong"
            alt="testimonials"
            width="150"
            height="150"
          />
        </div>
        <h6 class="text-primary mb-3">{props.job}</h6>
        <p class="px-xl-3 fs-5 fst-italic fw-lighter">
          {props.description} <FormatQuoteIcon />
        </p>
        <h5 class="mb-3">-{props.name}</h5>
        <ul class="list-unstyled d-flex justify-content-center mb-0">
          {new Array(Math.floor(props.rate)).fill(null).map(() => (
            <StarIcon />
          ))}
          <br />
          <br />
        </ul>
      </div>
    </>
  );
};

export default card;
