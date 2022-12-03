import React from 'react'
import {useLocation} from 'react-router-dom';
const Doctorspage = () => {
      const location = useLocation();
  return (
    <div>
      <h1 className="text-center">
            our Professional DR. {location.state.name}
      </h1>
      <div class="container-fluid d-flex flex-wrap ">
	<div class="row">
		<div class="col col-md-3">
      <img src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d" className="img-fluid" alt="" srcset="" />
    </div>
		<div class="col">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam magni provident illum nisi veritatis recusandae nostrum ab ipsam corporis obcaecati eius, possimus, consequuntur quisquam mollitia saepe placeat! Obcaecati itaque amet omnis in!

    </div>
	</div>
</div>
    </div>
  )
}

export default Doctorspage