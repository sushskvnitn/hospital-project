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
    data.append("Name", file);
    data.append("title", gallarytitle);
    data.append("caption", description);
    try {
     let response = await axios.post("/addphoto", data);
      console.log(response);

      if (response.status === 200) {
        alert("uploaded successfully");
      }

    } catch (error) {
      console.error(error+"error");
    }
  }
  return (
    <div className=" m-4 my-4 d-flex justify-content-center"  >
      <form action="/addphoto" method="post" encType="multipart/form-data" style={{ width:"60rem",backgroundColor: '#fff',padding:"20px",borderRadius: "10px",margin:"2rem"}}>
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
          name="Name"
          onChange={uploadimg}
        />
        <label className="input-group-text mt-1" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
      <button className="btn dark_blue text-white" onClick={onsubmit}  >submit</button>
      </form>
    </div>
  );
};

export default UploadImg;
