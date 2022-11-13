import './App.css';
import Navbar from "./components/navbar";

import CallIcon from '@mui/icons-material/Call';
import Homepage from "./components/homepage";
import Footer from "./components/footer/footer";
import Aboutus from './components/about/about';
import Gallery from './components/gallery/Gallery';
function App() {
  return (
    <> 
      <Navbar/>
      <Homepage/>
      <Aboutus/>
      <Gallery/>
      
      <Footer/>
      <div className=" navbar_color mx-4 shadow">
        <a className="btn rounded m-4 p-3 button_bottom  rounded-circle" href="tel:1800123456" ><CallIcon /></a>
      </div>
    </>
  );
}

export default App;
