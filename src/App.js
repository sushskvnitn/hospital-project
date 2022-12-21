import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Footer from "./components/footer/footer";
import Aboutus from "./components/about/about";
import Gallery from "./components/gallery/Gallery";
import CallIcon from "@mui/icons-material/Call";
import Login from "./components/login/Login";
import Services from "./components/services/services";
import Addmessage from "./components/Testimonials/addmessage";
import DoctorHandle from "./components/doctorhandle/doctorhandle";
import Doctors from "./components/doctors/doctors";
import DoctorDetails from "./components/doctors/doctorpage";
import Contact from "./components/contact/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resouces from "./components/patientResources/Resouces";
import Conditions from "./components/conditionsTreated/Conditions";
import Booking from "./components/book_appointment/booking";
import Readmore from "./components/Testimonials/readmore";
import { useEffect } from "react";

function App() {
  
  const addslots = async () => {
    const res = await fetch("/addslots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: Date.now(),
        slots: 20,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert("slots not added");
      console.log("slots not added");
    } else {
      window.alert("slots added Successfully");
      console.log(" slots added Successfully");
    }
  };
  function resetAtMidnight() {
    var now = new Date();
    var night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // the next day, ...
      0,
      0,
      0 // ...at 00:00:00 hours
    );
    var msToMidnight = night.getTime() - now.getTime();

    setTimeout(function () {
      addslots(); //      <-- This is the function being called at midnight.
      resetAtMidnight(); //      Then, reset again next midnight.
    }, msToMidnight);
  }
  useEffect(() => {
    resetAtMidnight();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/doctorhandle" element={<DoctorHandle />} />
      </Routes>
      <Routes>
        <Route path="/addmessage" element={<Addmessage />} />
      </Routes>
      <Routes>
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/doctorscard" element={<DoctorDetails />} />
      </Routes>
      <Routes>
        <Route path="/readmore" element={<Readmore />} />
      </Routes>
      <Routes>
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/book-appointment" element={<Booking />} />
      </Routes>
      <Routes>
        <Route path="/conditions" element={<Conditions />} />
      </Routes>
      <Routes>
        <Route path="/resouces" element={<Resouces />} />
      </Routes>
      <Footer />
      <div className=" navbar_color mx-4 shadow">
        <a
          className="btn rounded m-4 p-3 button_bottom  rounded-circle"
          href="tel:1800123456"
          style={{ color: "white",backgroundColor:"#225a97" ,zIndex:"10" }}
        >
          <CallIcon />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
