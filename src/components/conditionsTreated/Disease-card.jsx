import React from 'react'
import "./conditions.css"
import AOS from 'aos'
import { Fragment } from "react";
const Diseasecard = (props) => {
  AOS.init();


  const withBreaks =props.backdescription.split("•").map((item, i) => { return <Fragment className="mx-2" key={i}>{item} <br /></Fragment> });
  return (
    <div>

<div className="container" data-aos="flip-right">
  <div className="row">
        
    <input type="checkbox" id={props.to} style={{width:"20rem",backgroundColor: '#fff'}} />
    <label className="col-md-4 card-container" htmlFor={props.forroute} >
      <div className="card-flip" >
        <div className="card front"  style={{ width:"20rem",backgroundColor: '#fff',padding:"5px",borderRadius: "3px",margin:"2rem"}}>
          <img alt="img" src={props.img} className="card-img-top img-fluid" />
          <div className="card-block">
            <h4 className="card-title" style={{
              color:"#043d78"
            }}   >{props.disease}</h4>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
        <div className="card back"  style={{ width:"20rem",backgroundColor: '#fff',padding:"5px",borderRadius: "10px",margin:"2rem"}} >
          <div className="card-header">
          {props.backheader}
          </div>
          <div className="card-block">
            <p    >
            {withBreaks}
            </p>
            <a href={props.link} className="btn btn-warning btn-end btn-sm">more</a>
          </div>
        </div>
      </div>
    </label>



  </div>
</div>

    </div>
  )
}

export default Diseasecard