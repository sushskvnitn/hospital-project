import React, { useState } from "react";
import axios from "axios";
const UploadImg = () => {
  const [gallarytitle, setgallarytitle] = useState("");
  const [file, setfile] = useState("");
  const [description, setdescription] = useState("");
  const uploadimg = (event) => {
    setfile(event.target.files[0]);
  };
  const onsubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("gallarytitle", gallarytitle);
    data.append("description", description);
    try {
      let response = await axios.post("/addphoto",data)
      if (response.status === 200) {
        console.log("success");
      }
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=" m-4 my-4 w-50 " >
      <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          image title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter title for image"
          onChange={(e) => setgallarytitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          description
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          placeholder="Enter description for image"
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={uploadimg}
        />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
      <button className="btn btn-primary" onClick={onsubmit} >submit</button>
      </form>
    </div>
  );
};

export default UploadImg;
