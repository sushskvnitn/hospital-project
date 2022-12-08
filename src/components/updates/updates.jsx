import React,{ useState ,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ticker from "./Ticker";
const Updates = () => {

  AOS.init();
  const [update, setupdate] = useState([]);
  useEffect(() => {
    fetch("/getticker")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setupdate(data);
      });
  }, []);
  return (
    <>
      <h3 className="mb-4 text-center py-2 "
      data-aos="fade-right" data-aos-duration="1000" >
        Updates
      </h3>
      <div className="d-flex justify-content-center">
        <div className="box"  data-aos-duration="1500" data-aos="zoom-in" >
          {update.slice(0, 8).map((item) => {
            return (
              <Ticker
                key={item._id}
                ticker={item.ticker}
                link={item.link}
                new={item.newicon}
              />
            );
          })}
           </div>
      </div>
    </>
  );
};

export default Updates;
