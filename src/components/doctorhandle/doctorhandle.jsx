import React from "react";
import UploadImg from "./uploadImg";
import Addticker from "./addticker";
const DoctorHandle = () => {
  return (
    <>
      <div className="marn-top">
        <div className="">
          <div className="" style={{ width: "75rem" }}>
            <h1>this page is only for the doctor</h1>
            <h3>Upload image into gallary </h3>
            <UploadImg />
            
          </div><br />
          <h3>Add New Update </h3>
            <Addticker />
        </div>
      </div>
    </>
  );
};

export default DoctorHandle;
