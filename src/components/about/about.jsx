import React from 'react'
import {  Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const about = () => {
  return (
    <div className="marn-top">
    <Link className="btn navbar_color text-white mx-4 my-2" to="/" > <ArrowBackIcon/> </Link>
    <h1 className ="text-center ">About us </h1>
     <div className="container d-flex justify-content-center" > 
      <h4 className="text-center align-center w-75 my-2 ">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quo eos consectetur quae magni asperiores mollitia ratione eaque? Quasi corporis sunt accusamus expedita pariatur accusantium, saepe possimus earum.
       </h4>
       </div> 
<div className="container d-flex justify-content-center" >
       <p className="text-center w-50 my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe vero tempore harum? Tempora voluptates vero odio nesciunt sequi sint dicta natus reprehenderit animi error fugiat quaerat eos magni, magnam voluptatem? Voluptatibus eum perferendis reiciendis quidem pariatur obcaecati iure, adipisci iste ipsa labore, expedita magnam autem similique! Corporis ducimus sapiente nihil, ex aspernatur consequuntur! Tempore sint minima cumque totam doloribus quis atque dolorum deserunt! Molestias ratione minima deleniti, officiis doloremque fugit velit. Est?
       </p>
 </div>
   </div>
  )
}

export default about