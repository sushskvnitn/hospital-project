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
function App() {
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
        >
          <CallIcon />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
