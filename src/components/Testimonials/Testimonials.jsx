import React, { useState, useEffect } from "react";
import Card from "./card";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  AOS.init();
  const [revi, setreviews] = useState([]);

  useEffect(() => {
    fetch("/getreviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.reverse();
        setreviews(data);
      });
  }, []);

  return (
    <>
      <section
        className="Testimonials my-2"
        style={{
          backgroundColor:"#225a97"
        }}
      >
        <div className="row d-flex justify-content-center text-white" data-aos="fade-right"
        data-aos-duration="1000">
          <div className="col-md-10 col-xl-8 text-center">
          
            <br />
            <h3 className="mb-4 "> <b>Testimonials</b> </h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
             Our patients are our best advertisement. We are proud of the care we provide and the relationships we build with our patients. We invite you to read what our patients have to say about their experiences with us.
            </p>
          </div>
        </div>

        <div className="row text-center  d-flex justify-content-center flex-wrap mx-3">
          {
            // eslint-disable-next-line array-callback-return
            revi.slice(0,20).map((item) => {
              if(item.view===true)
                return (
                <Card
                  key={item._id}
                  name={item.name}
                  job={item.occupation}
                  rate={item.rating}
                  description={item.review}
                />
              );
            })
          }
        </div>
        <div className="d-flex justify-content-center p-3 m-3">
          <div
            className="btn-group "
            style={{ width: "19rem" }}
            role="group"
            aria-label="Basic example"
          >
            <Link
              type="button"
              className="btn  dark_blue text-white"
              to="/addmessage"
            >
              <AddCircleIcon /> add review
            </Link>
            <Link type="button" className="btn btn-warning" to="/readmore">
               read more<ReadMoreIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
