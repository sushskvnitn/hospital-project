import React from "react";
import { useRef } from "react";
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
import Photo from "../images/logo2.png";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VaccinesIcon from '@mui/icons-material/Vaccines';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color sticky-top  " >
     
        <div className="container-fluid ">
           <Link className="navbar-brand mx-3" to="/"  onClick={collapseNav} >
            <img width="60" height="60" className="d-inline-block align-top img-fluid" src={Photo} alt="" srcSet="" />
          </Link>
          <button
               ref={navButton}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={linksContainerRef}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div
                className="nav-item"
              >
               
                <Link className="nav-link   header_text1"  to="/" onClick={collapseNav}>
                  <ApartmentIcon /> Home
                </Link>
              </div> 
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/about" onClick={collapseNav}>
                  <InfoIcon /> About us
                </Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/services" onClick={collapseNav} >
                  <MedicalServicesIcon /> Services
                </Link>
              </li>
              <li>
                <Link className="nav-link   header_text1" to="/conditions"onClick={collapseNav} >
                  <VaccinesIcon /> Conditions Treated
                </Link>
              </li>
               {/* <li>
                <Link className="nav-link   header_text1" to="/resouces" onClick={collapseNav}>
                  <VaccinesIcon /> Patient Resouces
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/doctors" onClick={collapseNav} >
                  <PersonAddIcon /> Meet Our Professionals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/gallery" onClick={collapseNav}>
                  <CollectionsIcon /> Gallery
                </Link>
              </li>
             
              
             
            </ul>
            <div className="d-flex">
              <Link
                className="btn btn-sm mx-1 header_text2"
                type="submit"
                to="/contactus"
                onClick={collapseNav}
              >
                <ContactPageIcon /> Contact us
              </Link>
              <Link
                className="btn btn-sm mx-1 header_text2"
                type="submit"
                to="/book-appointment"
                onClick={collapseNav}
              >
                <BookOnlineIcon /> Book Appointment
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link   header_text1" to="/login" onClick={collapseNav}>
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
