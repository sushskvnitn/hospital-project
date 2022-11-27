import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LoginIcon from "@mui/icons-material/Login";
import { Link as Linker } from "react-scroll";
import {  Link } from "react-router-dom"
import Photo from "../images/logo2.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar_color sticky-top  " >
        <div className="container-fluid ">
          <Link className="navbar-brand  header_text" to="/">
            <img width="80" height="50" className="d-inline-block align-top " src={Photo} alt="" srcset="" />
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
              <Linker
                className="nav-item"
                to="Home"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
                <Link
                  className="nav-link  header_text1"
                  aria-current="page"
                  href="/"
                >
                  <ApartmentIcon /> Home
                </Link>
              </Linker>
              <Linker
                className="nav-item"
                to="updates"
                smooth={true}
                style={{ textDecoration: "none" }}
              >
                <a
                  className="nav-link header_text1"
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
                <a className="nav-link   header_text1" href="/">
                  <ReviewsIcon /> Testimonials
                </a>
              </Linker>
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/about">
                  <InfoIcon /> About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   header_text1" to="/gallery">
                  <CollectionsIcon /> Gallery
                </Link>
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
