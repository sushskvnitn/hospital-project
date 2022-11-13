import React from 'react'

const Home = () => {
  return (
    <>
    <div id="Home" ></div>
    <div style={{zIndex:"-1" }}>
      <iframe src="https://embed.lottiefiles.com/animation/22463" className="text-center hospital_animation "  title="hi"  style={{ pointerEvents: "none" }}></iframe>
    </div>
    <div style={{marginTop:"35vh" ,zIndex:"1" }}>
      <h1 className="text-center ">Narayana Hospital</h1>
      <p className="fs-5 text-center"> location : Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in porro recusandae? </p>
    </div>
      
    </>
  )
}

export default Home