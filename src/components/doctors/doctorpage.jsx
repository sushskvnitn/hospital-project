import React from 'react'
import {useLocation} from 'react-router-dom';
const Doctorspage = () => {
      const location = useLocation();
  return (
    <div className="marn-top">
      <h3 className="text-center">
            our Professional DR. {location.state.name}
      </h3>
      <div class="container-fluid d-flex flex-wrap ">
	<div class="row">
		<div class="col col-md-4">
      <img  className="img-fluid rounded" src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"  alt="" srcset="" />
    </div>
		<div class="col">
      <h1 className="margin_top text-upparcase">Dr.{location.state.name} </h1>
      <h3 className="my-2"> <span className="blue_color">EDUCATION:</span>  <span  className="fs-4  ">{location.state.education}</span> </h3>
      <h3 className="my-2"> <span  className="blue_color"> EXPERIENCE: </span><span  className="fs-4 "> {location.state.experiance}</span></h3>
      <h3 className="my-2"> <span  className="blue_color"> FIELD OF INTEREST: </span><span  className="fs-4 ">{location.state.interests}</span> </h3>
    </div>
	</div>
</div>
<div className="d-flex justify-content-center ">
  <h4 className="text-center w-75"> About: <span className="fs-6" >{location.state.desc}</span> </h4>
</div>

    </div>
  )
}

export default Doctorspage