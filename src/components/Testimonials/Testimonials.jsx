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
        setreviews(data);
      });
  }, []);

  return (
    <>
      <section
        className="Testimonials my-2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
          
            <br />
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center  d-flex justify-content-center">
          {
            revi.map((item) => {
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
              {" "}
              <AddCircleIcon /> add review
            </Link>
            <button type="button" className="btn btn-warning">
              {" "}
              <ReadMoreIcon /> read more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
