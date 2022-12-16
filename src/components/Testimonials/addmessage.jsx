import React ,{ useState  }from 'react'
import AOS from 'aos';
const Addmessage = () => {
  AOS.init();
  const [name, setname] = useState("");
  const [occupation, setoccupation] = useState("");
  const [review, setdescription] = useState("");
  const [rating, setrating] = useState();
  const onsubmit = async (event) => {
    event.preventDefault();
    if(rating>5){
      window.alert("rating should be less than 5");
      return;
    }
    const res = await fetch("/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        occupation,
        review,
        rating,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    }
    else {
      window.alert("review added successfully");
      console.log("review added successfully");
    }
  }

  return (
    <> <h1 className="my-3 text-center"> <b> Add Review </b></h1>
    <div className="Addmessage marn-top d-flex justify-content-center"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"data-aos-duration="1000">
      <form action="/addreview" method="post" encType="multipart/form-data" style={{ width:"60rem",backgroundColor: '#fff',padding:"20px",borderRadius: "10px",margin:"2rem"}}>
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
        <label htmlFor="exampleFormControlInput1" className="form-label blue-text">
          your review
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="write your review here less than 200 letters "
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
          placeholder="your rating for the hospital out of 5"
          onChange={(e) => setrating(e.target.value)}
        />
      </div>
      <button className="btn " onClick={onsubmit}  style={{backgroundColor:"#100744",color:"white"}}  >submit review</button>
      </form>
    </div>
   </>
  )
}

export default Addmessage