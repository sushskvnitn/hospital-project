import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
// import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
// import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LoginIcon from "@mui/icons-material/Login";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import { Link as Linker } from "react-scroll";
import {  Link } from "react-router-dom"
import Photo from "../images/logo2.png"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color sticky-top  " >
        <div className="container-fluid ">
          <Link className="navbar-brand  header_text" to="/">
            <img width="80" height="50" className="d-inline-block align-top " src={Photo} alt="" srcSet="" />
          </Link>
          <button
            className="navbar-toggler "
            type="button "
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div
                className="nav-item"
                to="Home"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
               
                <Link className="nav-link   header_text1"  to="/">
                  <ApartmentIcon /> Home
                </Link>
              </div> 
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/about">
                  <InfoIcon /> About us
                </Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/services">
                  <MedicalServicesIcon /> Services
                </Link>
              </li>
              <li>
                <Link className="nav-link   header_text1" to="/conditions">
                  <LocalHospitalIcon /> Conditions Treated
                </Link>
              </li>
               <li>
                <Link className="nav-link   header_text1" to="/resouces">
                  <VaccinesIcon /> Patient Resouces
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/doctors" >
                  <PersonAddIcon /> Meet Our Professionals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/gallery" >
                  <CollectionsIcon /> Gallery
                </Link>
              </li>
             
              
             
            </ul>
            <div className="d-flex">
              <Link
                className="btn  header_text1"
                type="submit"
                to="/contactus"
              >
                <ContactPageIcon /> Contact us
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link   header_text1" to="/login">
                    <LoginIcon /> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
