import React from 'react'
import DoctorCard from './doctorcard'
const Doctors = () => {
  return (
    <>
    <h1 className="text-center "> Meet Our Professionals </h1>
    <h5 className="text-center" >Place your trust in our team of Doctors with the midas touch and decades
of experience. Live pain free on your way to recovery.</h5>
    <div className="container d-flex justify-content-center flex-wrap">

      <div className="row">
        <div className="col-md-4">
          <DoctorCard name="rohith"
           education="MBBS, MD"
          experiance="AIIMS, New Delhi"
          interests="Orthopedics"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi." />
        </div>
        <div className="col-md-4">
          <DoctorCard name="sushant" 
           education="MBBS, MD"
          experiance="AIIMS, New Delhi"
          interests="Orthopedics"
             desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi."
          />
        </div>
        <div className="col-md-4">  
          <DoctorCard name="tarun"
          education="MBBS, MD"
          experiance="AIIMS, New Delhi"
          interests="Orthopedics"
             desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam iusto, vero vel molestias voluptatum veritatis quae, non consequuntur illo assumenda rem repellendus ad soluta, id fugiat rerum iure molestiae esse excepturi."
          />
        </div>
      </div>
    </div>


    </>
  )
}

export default Doctors