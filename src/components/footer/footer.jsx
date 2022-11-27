import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
  return (
    <>
  
<footer className="bg-light text-center text-black">
<div className="container p-4">
    <div className="row">
      <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">description</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">working hours</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
    </div>
  </div>
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
        className="btn text-white  mx-3"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><FacebookIcon/></a>
      <a
        className="btn text-white  mx-3"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><TwitterIcon/></a>

      <a
        className="btn text-white  mx-3"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><GoogleIcon/></a>
      <a
        className="btn text-white  mx-3 "
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><InstagramIcon/></a>
    </section>
  </div>

  <div className="text-center p-3 text-dark" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a className="text-dark" href="https://hospitalpro.netlify.app/">hospitalpro.netlify.app</a>
  </div>
</footer>

    </>
  )
}

export default Footer