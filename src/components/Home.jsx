import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import Welcome from "../images/welcome.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  return (
    <div className="marn-top">
      <div id="Home"></div>
      {/* <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
    <SwiperSlide><img src={Welcome} className="img-fluid" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.carecochin.com/uploads/banners/shenoys-care-1608615395.jpg" className="img-fluid" alt="" /></SwiperSlide>

    </Swiper> */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img alt="img" src={Welcome} />
        </div>
        <div>
          <img
            alt="img"
            src="https://i.postimg.cc/MKHLf908/Shreeyash-building.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
