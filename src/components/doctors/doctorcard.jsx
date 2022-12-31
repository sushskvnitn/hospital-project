import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AOS from 'aos';
import {useNavigate} from 'react-router-dom'

const DoctorCard = (props) => {
  AOS.init();
  const navigate = useNavigate()
  const opendetails = () => {
    navigate('/doctorscard/', {state: {name: props.name, desc: props.desc, experiance: props.experiance, education: props.education,interests: props.interests, email: props.email, website: props.website, address: props.address, achievement: props.achievement, image: props.image ,subdesc: props.subdesc }})
  }
  return (
    <div className=" m-3"   >
      <div className="card" style={{height:"35rem"}}>
  <div className="bg-image hover-overlay img-hover-zoom--brightness ripple" data-mdb-ripple-color="light">
  <div className="img-hover-zoom">
  <img alt="images " src="https://i.postimg.cc/G3YybySJ/Salil-Profile-photo.jpg" className="img-fluid"/>
</div>
   
  </div>
  <div className="card-body" data-aos="fade-up" data-aos-duration="500" >
    <h4 className="card-title strong">Dr. {props.name}</h4>
    <p className="card-text">  { props.subdesc }</p>
    <h5>Education</h5>
    <p className="card-text">  { props.education }</p>
    
  </div>
  <div className=" card-footer text-muted mx-auto">
    <button  className="btn btn-sm btn-outline-secondary"  onClick={opendetails}  >know more<DoubleArrowIcon/></button>
    </div>
</div>
    </div>
  )
}

export default DoctorCard