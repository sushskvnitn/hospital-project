import React, { useState } from "react";
const UploadImg = () => {
  const [title, setgallarytitle] = useState("");
  const [image, setImage] = useState("");
  const [caption, setdescription] = useState("");
  const [photo, setphotourl] = useState("");

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "hospital_gallary");
    data.append("cloud_name", "hospitalpro");
    fetch("https://api.cloudinary.com/v1_1/hospitalpro/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setphotourl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

      fetch("/addphoto",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title,
          caption,
          photo
      })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          console.log(data.error)
        }
        else{
          window.alert("image uploaded successfully")
          console.log(data)
        }
      }).catch(err=>{
        console.log(err)
      })
  };
 
  return (
    <div className=" m-4 my-4 d-flex justify-content-center"  >
      <div   style={{ width:"60rem",backgroundColor: '#fff',padding:"20px",borderRadius: "10px",margin:"2rem"}}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          image title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter title for image"

          value={title}
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
          value={caption}
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          name="Name"
          onChange={(e)=>{
            setImage(e.target.files[0]) 
           } }
        />
        <label className="input-group-text mt-1" htmlFor="inputGroupFile02">
          Upload 
        </label>
      </div>
      <button className="btn dark_blue text-white" onClick={postDetails}  >submit</button>
      </div>
    </div>
  );
};

export default UploadImg;
