import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Testimonials from './components/Testimonials/Testimonials';
import CallIcon from '@mui/icons-material/Call';
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <div className=" navbar_color mx-4 shadow">
        <a className="btn rounded m-4 p-4 button_bottom  rounded-circle" href="tel:1800123456" ><CallIcon /></a>
      </div>
    </>
  );
}

export default App;
