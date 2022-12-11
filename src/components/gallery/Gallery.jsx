import React ,{ useState,useEffect} from "react";
import Gallarycard from "./Gallary_card";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Gallary = () => {
  const [data, setData] = useState("");
  const fetchimages = async(e) => {
    const res = await fetch("https://hospiserver.onrender.com/gallery", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    fetchimages();
  }, []);

     
  return (
    <div className="marn-top" >
      <Link className="btn navbar_color text-dark mx-4 my-2" to="/">
        <ArrowBackIcon />
      </Link>
      <h1 className="text-center blue_color"> <b> Gallery </b></h1>
      <div className=" d-flex justify-content-center  flex-wrap px-2">
         
       {
          data['gallery'] && data['gallery'].map((item) => {
            return (
              <Gallarycard
                imagesrc={item['photo']}
                title={item['title']}
                desc={item['caption']}
                date={item['date']}
              />
            );
          })

         }
        
      </div>
    </div>
  );
};

export default Gallary;
