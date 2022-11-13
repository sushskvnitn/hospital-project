import React from "react";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color sticky-top">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white header_text" href="/">
            Narayana hospital
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
              <Link className="nav-item"  to="Home" smooth={true}  style={{textDecoration: 'none'}}>
                <a className="nav-link  text-white active header_text1" aria-current="page" href="/">
                <ApartmentIcon/>  Home
                </a>
              </Link> 
              <Link className="nav-item"  to="updates" smooth={true}  style={{textDecoration: 'none'}}>
                <a className="nav-link  text-white active header_text1" aria-current="page" href="/">
                <TipsAndUpdatesIcon/>  Updates
                </a>
              </Link>
              <Link className="nav-item" to="Testimonials" smooth={true}  style={{textDecoration: 'none'}} >
                <a className="nav-link  text-white header_text1" href="/">
                <ReviewsIcon/> Testimonials
                </a>
              </Link>
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
              <Link className="btn bg-white" type="submit" to="contact" smooth={true}  style={{ 
                color: "black",
                textDecoration: 'none'
              }} >
              <ContactPageIcon/> Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
