import React ,{ useState,useEffect} from "react";
import Gallarycard from "./Gallary_card";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Gallary = () => {
  const [data, setData] = useState("");
  const fetchimages = async(e) => {
    const res = await fetch("/gallery", {
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
      <Link className="btn navbar_color text-white mx-4 my-2" to="/">
        <ArrowBackIcon />
      </Link>
      <h1 className="text-center "> Gallery </h1>
      <div className=" d-flex justify-content-center  flex-wrap px-2">
         
       {
          data['gallery'] && data['gallery'].map((item) => {
            return (
              <Gallarycard
                imagesrc={'http://localhost:8000/public/images/'+item['photo']}
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
