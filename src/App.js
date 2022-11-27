import './App.css';
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Footer from "./components/footer/footer";
import Aboutus from './components/about/about';
import Gallery from './components/gallery/Gallery';
import CallIcon from '@mui/icons-material/Call';
import Login from './components/login/Login';
import Services from './components/services/services';
import Addmessage from './components/doctorhandle/addmessage';
import DoctorHandle from './components/doctorhandle/doctorhandle';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return <BrowserRouter> 
   <Navbar/> 
   
   <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
    <Routes>
      <Route path="/about" element={<Aboutus/>}/>
    </Routes>
    <Routes>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="/doctorhandle" element={<DoctorHandle/>}/>
    </Routes>
    <Routes>
      <Route path="/addmessage" element={<Addmessage/>}/>
    </Routes>
    <Routes>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
      <div className=" navbar_color mx-4 shadow">
        <a className="btn rounded m-4 p-3 button_bottom  rounded-circle" href="tel:1800123456" ><CallIcon /></a>
      </div>
    </BrowserRouter>
  ;
}

export default App;
