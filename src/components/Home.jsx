import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
      <SwiperSlide> <img src="https://www.carecochin.com/uploads/banners/Rheumatology-kerala-1608615263.jpg" alt="" /> </SwiperSlide>
      <SwiperSlide><img src="https://www.carecochin.com/uploads/banners/covid-kerala--1608615332.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.carecochin.com/uploads/banners/shenoys-care-1608615395.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  src="https://images.unsplash.com/photo-1666214280352-db292c05fd80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" style={{width:"100%",height:"80vh"}} alt="" /></SwiperSlide>
     
    </Swiper>

      
    </>
  )
}

export default Home