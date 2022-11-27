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
    <>
    <div id="Home" ></div>
    {/* <div style={{zIndex:"-1" }}>
      <iframe src="https://embed.lottiefiles.com/animation/22463" className="text-center hospital_animation "  title="hi"  style={{ pointerEvents: "none" }}></iframe>
    </div>
    <div style={{marginTop:"35vh" ,zIndex:"1" }}>
      <h1 className="text-center " style={{ color: "#043d78" }}>Narayana Hospital</h1>
      <h3 className="text-center " >Lorem ipsum dolor sit amet.</h3>
      <p className="fs-5 text-center"> location : Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in porro recusandae? </p>
    </div> */}
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
    <SwiperSlide><img src={Welcome} alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.carecochin.com/uploads/banners/shenoys-care-1608615395.jpg" alt="" /></SwiperSlide>
      
     
    </Swiper>

      
    </>
  )
}

export default Home