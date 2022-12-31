import React, { useState } from "react";
const UploadImg = () => {
  const [title, setgallarytitle] = useState("");
  const [image, setImage] = useState("");
  const [caption, setdescription] = useState("");
  const [url, setURL] = useState("");

  const resetDetails = () => {
    setgallarytitle("");
    setImage("");
    setdescription("");
    setURL("");
  }

  const postDetails = async () => {
    if (!url) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "hospital_gallary");
      data.append("cloud_name", "hospitalpro");
      const url = await fetch(
        "https://api.cloudinary.com/v1_1/hospitalpro/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      if (url.status === 200) {
        const photodetails = await url.json();
        const photo = photodetails.url;

        const data = await fetch("/addphoto", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            caption,
            photo,
          }),
        });
        if (data.status === 400) {
          alert("Error in uploading image");
        } else if (data.status === 200) {
          alert("image uploaded successfully");
          resetDetails();
        }
      } else {
        alert("Error in uploading image");
      }
    } else {
      try {
        const data = await fetch("/addphoto", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            caption,
            photo: url,
          }),
        });
        if (data.status === 400) {
          alert("Error in uploading image");
        } else if (data.status === 200) {
          alert("image uploaded successfully");
          resetDetails();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" m-4 my-4 d-flex justify-content-center">
      <div
        style={{
          width: "60rem",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          margin: "2rem",
        }}
      >
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
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <label className="input-group-text mt-1" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>
        <p className="mx-2 align-center text-center">OR </p>
        <div>
          <mark
            className="mx-2 align-center text-center"
            style={{ backgroundColor: "red" }}
          >
           Note:
          </mark>
          <a
            href="https://postimages.org/"
            className="fs-6 text-danger"
            target="_blank"
            rel="noreferrer"
          >
            click here to get Image link 
          </a>
           and paste the direct link here after uploading 
        </div>
        
        <div className="input-group mb-3">
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Paste URL for image"
            value={url}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </div>
        <button className="btn dark_blue text-white" onClick={postDetails}>
          submit
        </button>
      </div>
    </div>
  );
};

export default UploadImg;
