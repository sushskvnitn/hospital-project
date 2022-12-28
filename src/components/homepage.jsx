import React from 'react'
import Home from "./Home";
import Testimonials from './Testimonials/Testimonials';
import Updates from './updates/updates';
import Contact from "./contact/contact";
const homepage = () => {
  return (
    <>
      <Home/>
      <Updates/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default homepage