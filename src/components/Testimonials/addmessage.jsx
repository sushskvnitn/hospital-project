import React ,{ useState  }from 'react'
import axios from "axios";
const Addmessage = () => {

  const [name, setname] = useState("");
  const [file, setfile] = useState("");
  const [occupation, setoccupation] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState();

  const uploadimg = (event) => {
    setfile(event.target.files[0]);
  };
  const onsubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("Name", name);
    data.append("photo", file);
    data.append("occupation", occupation);
    data.append("review", description);
    data.append("rating", rating);


    try {
     let response = await axios.post("/addmessage", data);
      console.log(response+"response");
      if (response.status === 200) {
        alert("uploaded successfully");
      }
    } catch (error) {
      console.error(error+"error");
    }
  }

  return (
    <>
    <div className="Addmessage">
      <h1> Add message</h1>
      <form action="/addmessage" method="post" encType="multipart/form-data" >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          your name
        </label>
        <input
        type="text"
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="write your name here"
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          your occupation
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          rows="2"
          placeholder="write your occupation here"
          onChange={(e) => setoccupation(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          your review
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="write your review here"
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Rating
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="your rating for the hospital"
          onChange={(e) => setrating(e.target.value)}
        />
      </div>
      
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          name="Name"
          placeholder="upload image"
          onChange={uploadimg}
        />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
      <button className="btn btn-primary" onClick={onsubmit} >submit review</button>
      </form>
    </div>
    

   </>
  )
}

export default Addmessage