import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Welcome from "../images/welcome.png"
const Home = () => {
  return (
    <div className="marn-top">
    <div id="Home" ></div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide><img src={Welcome} className="img-fluid" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.carecochin.com/uploads/banners/shenoys-care-1608615395.jpg" className="img-fluid" alt="" /></SwiperSlide>

    </Swiper>

      
    </div>
  )
}

export default Home