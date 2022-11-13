import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LoginIcon from "@mui/icons-material/Login";
import { Link as Linker } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color sticky-top">
        <div className="container-fluid ">
          <Linker className="navbar-brand text-white header_text" href="/">
            Narayana hospital
          </Linker>
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
              <Linker
                className="nav-item"
                to="Home"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
                <a
                  className="nav-link  text-white active header_text1"
                  aria-current="page"
                  href="/"
                >
                  <ApartmentIcon /> Home
                </a>
              </Linker>
              <Linker
                className="nav-item"
                to="updates"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
                <a
                  className="nav-link  text-white active header_text1"
                  aria-current="page"
                  href="/"
                >
                  <TipsAndUpdatesIcon /> Updates
                </a>
              </Linker>
              <Linker
                className="nav-item"
                to="Testimonials"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
                <a className="nav-link  text-white header_text1" href="/">
                  <ReviewsIcon /> Testimonials
                </a>
              </Linker>
              <li className="nav-item">
                <a className="nav-link  text-white header_text1" href="/about">
                  <InfoIcon /> About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white header_text1" href="/gallery">
                  <CollectionsIcon /> Gallery
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <Linker
                className="btn bg-white"
                type="submit"
                to="contact"
                smooth={true}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <ContactPageIcon /> Contact us
              </Linker>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link  text-white header_text1" href="/">
                    <LoginIcon /> 
                  </a>
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
