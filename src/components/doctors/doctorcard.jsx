import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useNavigate} from 'react-router-dom'

const DoctorCard = (props) => {
  const navigate = useNavigate()
  const opendetails = () => {
    navigate('/doctorscard/', {state: {name: props.name, desc: props.desc, qualification: props.qualification, studylocation: props.studylocation}})
  }
  return (
    <div className=" m-3">
      <div className="card">
  <div className="bg-image hover-overlay img-hover-zoom--brightness ripple" data-mdb-ripple-color="light">
  <div className="img-hover-zoom">
  <img alt="images" src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d" className="img-fluid"/>
</div>
   
  </div>
  <div className="card-body">
    <h4 className="card-title strong">{props.name}</h4>
    <p className="card-text">  { props.desc }</p>
    <div className="d-flex justify-content-end">
    <button  className="btn" onClick={opendetails}  >know more<DoubleArrowIcon/></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DoctorCard