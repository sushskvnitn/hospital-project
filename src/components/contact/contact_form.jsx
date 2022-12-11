import React,{ useState} from "react";
import axios from "axios";
const Contact_form = () => {
  const [name, setUser] = useState("");
  const [phone, setphone] = useState();
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      name: name,
      phone: phone,
      email: email,
      location: location,
      message: message,
    };
    try {
      await axios
          .post("/sendmessage", userdata)
          .then((response) => alert("your message has been received!"));
      
      
    } catch (error) {
      alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">send us message</h4>
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="name" value={name}
                        onChange={(e)=>{ setUser(e.target.value); }} required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value) } required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="number" placeholder="phone" value={phone} onChange={(e)=>setphone(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="location" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="message" value={message} onChange={(e)=> setMessage(e.target.value) } required/>
                      </div>
                    </div>
                    <div className="col-lg-12 my-4">
                      <button className="btn text-white" style={{ backgroundColor: "#0e54a3" }} >submit now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

    </>
  )
}

export default Contact_form