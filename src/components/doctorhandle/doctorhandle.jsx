import React from "react";
import UploadImg from "./uploadImg";
import Addticker from "./addticker";
const DoctorHandle = () => {
  return (
    <>
      <div className="marn-top">
        <div className="">
          <div className="my-3" >
            <h5 className="text-center text-danger "> Note :<b> This Page is only for the Hospital Owner</b></h5>
            <h3 className="text-center blue-text"> <b> Upload image into gallary </b></h3>
            <UploadImg />
            
          </div><br />
          <h3 className="text-center blue-text"> <b> Add New Update</b> </h3>
            <Addticker />
        </div>
      </div>
    </>
  );
};

export default DoctorHandle;
