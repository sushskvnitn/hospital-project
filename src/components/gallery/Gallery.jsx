import React from "react";
import Gallarycard from "./Gallary_card";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Gallary = () => {
  return (
    <div>
      <Link className="btn navbar_color text-white mx-4 my-2" to="/">
        <ArrowBackIcon />
      </Link>
      <h1 className="text-center "> Gallery </h1>
      <div className=" d-flex justify-content-center  flex-wrap px-2">
        <Gallarycard imagesrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" 
        title="Image 1"
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
         date="2021-10-10"
        />
        <Gallarycard imagesrc="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
         title="Image 2"
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
         date="2021-10-11" />
        <Gallarycard imagesrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" 
          title="Image 2"
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
         date="2021-10-11"
        />
        <Gallarycard imagesrc="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
        title="Image 2"
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
         date="2021-10-11" />
        <Gallarycard imagesrc="https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg"
        title="Image 2"
         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
         date="2021-10-11" />
      </div>
    </div>
  );
};

export default Gallary;
