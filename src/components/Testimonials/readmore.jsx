import React,{ useState, useEffect } from 'react'
import Card from "./card";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Readmore = () => {
      const [revi, setreviews] = useState([]);
  useEffect(() => {
    fetch("/getreviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setreviews(data);
      });
  }, []);
  return (
    <div  style={{overflow: 'hidden'}}>
    <h1 className="text-center marn-top "> <b> Testimonials</b></h1>
    <Link
              type="button"
              className="btn  dark_blue text-white "
              to="/addmessage"
            >
              <AddCircleIcon /> add review
            </Link>
      <div className="row text-center  d-flex justify-content-center my-4 flex-wrap mx-3">
            {
                  revi.map((item) => {
                        return (
                              <Card
                                    key={item._id}
                                    name={item.name}
                                    job={item.occupation}
                                    rate={item.rating}
                                    description={item.review}
                              />
                        );
                  })
            }
      </div>
      <Link type="button"
              className="btn  dark_blue text-white px-2 "
              to="/addmessage"
            >
              <ArrowBackIcon className="mx-2 " /> Back
      </Link>
    </div>
  )
}

export default Readmore