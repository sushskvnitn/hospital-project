import React from 'react'
import DoctorCard from './doctorcard'
import AOS from 'aos';
const Doctors = () => {
  AOS.init();
  return (
    <div className=" Conditions" data-aos="fade-down">
    <h1 className="text-center blue_color pt-4" > <b>Meet Our Professionals </b> </h1>
    <h5 className="text-center" >Place your trust in our team of Doctors with the midas touch and decades
of experience. Live pain free on your way to recovery.</h5>
    <div className="container d-flex justify-content-center flex-wrap">

      <div className="row">
        <div className="col-md-4">
          <DoctorCard name="rohith"
           education="MBBS, MD"
           address="abcd chowk ,nagpur"
           website="www.google.com"
           email="abcd@gmail.com"
           achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi." />
        </div>
        <div className="col-md-4">
          <DoctorCard name="sushant" 
           education="MBBS, MD"
           address="abcd chowk ,nagpur"
           website="www.google.com"
           email="abcd@gmail.com"
           achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
             desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi."
          />
        </div>
        <div className="col-md-4">  
          <DoctorCard name="tarun"
          education="MBBS, MD"
          address="abcd chowk ,nagpur"
          website="www.google.com"
          email="abcd@gmail.com"
          achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
             desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi."
          />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Doctors