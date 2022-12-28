import React from "react";
import Photo from "../../images/logo2.png";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer
        className=" text-center text-white"
        style={{ backgroundColor: "#043d78" }}
      >
        {/* footer with image and working hours  */}
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img
                  src={Photo}
                  alt="logo"
                  className="logo img-fluid "
                  style={{ height: "8rem",
                  backgroundColor: "white",
                  borderRadius: "5%", }}
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Working Hours</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div  className="text-white">
                      Monday - Friday
                    </div>
                  </li>
                  <li>
                    <div  className="text-white">
                      9:00 AM - 5:00 PM
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">
                  <Link to="/contactus" className="text-white">
                    Contact Us
                  </Link>
                  </h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="text-white">
                      Sanjeevan Advanced Rheumatology Centre
                    </div>
                  </li>
                  <li>
                    <div className="text-white">
                      502,shreeyash,95 East High court Road ,
                    </div>
                  </li>
                  <li>
                    <div className="text-white">
                     Ramdaspeth nagpur
                      -440010
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://sanjeevanarc.com">
            sanjeevanarc.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
