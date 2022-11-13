import React from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color">
        <div className="container-fluid ">
          <a className="navbar-brand text-white header_text" href="/">
            Narayana hospital
          </a>
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
              <li className="nav-item">
                <a className="nav-link  text-white active header_text1" aria-current="page" href="/">
                <ApartmentIcon/>  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white header_text1" href="/">
                <ReviewsIcon/> Testimonials
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link  text-white header_text1" href="/">
               <InfoIcon/> About us
                </a>
              </li> 
               <li className="nav-item">
                <a className="nav-link  text-white header_text1" href="/">
               <CollectionsIcon/> Gallery
                </a>
              </li>
              
            </ul>
            <div className="d-flex">
              <button className="btn bg-white" type="submit" style={{ 
                color: "black",
              }} >
             <ContactPageIcon/> Contact us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
