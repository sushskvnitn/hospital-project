import React ,{ useState} from "react";
import axios from "axios";
const Booking = () => {
    const [connect, connectdata] = useState({
        name: "",
        lname: "",
        address: "",
        email: "",
        phone: "",
        date: "",
        doctor: ""
      });
      const handleinputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        connectdata({ ...connect, [name]: value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const {  name,lname, address, email, phone, date,doctor } = connect;
        await axios
          .post("/sendmail", connect)
          .then((response) => alert("mail sent successfully !! , shop keeper will contact you soon !!"));
      };
  return (
    <div className="marn-top booking ">
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center ">Booking</h1>
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <p className="blue-text">
              Just answer a few questions
              <br /> so that we can personalize the right experience for you.
            </p>
            <div className="cards">
              <h5 className="text-center mb-4">Add your Details here </h5>
              <form className="form-card">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      First name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="name"
                      value = {connect.name}
                      onChange={handleinputs}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Last name<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      value = {connect.lname}
                      onChange={handleinputs}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      
                      email<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                        value = {connect.email}
                        onChange={handleinputs}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="text"
                      id="mob"
                      name="phone"
                      placeholder="Enter your phone number"
                        value = {connect.phone}
                        onChange={handleinputs}
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      date<span className="text-danger"> *</span>
                    </label>
                    <input type="date" id="job" name="date" placeholder="Enter the date for appointment " value ={connect.date} onChange={ handleinputs}  />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <br />
                    <select
                      className="form-select my-1"
                      aria-label="Default select example"
                      name="doctor"
                      value={connect.doctor}
                        onChange={handleinputs}
                    >
                      <option defaultValue>Select Doctor </option>
                      <option value="DR-ABC">DR ABC </option>
                      <option value="DR-EFG">DR EFG </option>
                      <option value="DR-MNO">DR MNO </option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                    
                    <label className="form-control-label px-3">
                      Your Address<span className="text-danger"> *</span>
                    </label>
                    <input type="text" id="ans" name="address" placeholder="" value={connect.address} onChange={handleinputs} />
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
                    <button
                      type="submit"
                      className="btn-block btn-primary buttn"
                      onClick={onSubmit}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
                <p className="text-center ">
                  The above booking is not a confirmation. Our office staff
                  shall call you to fix a time and date in the immediate days.
                  Please consider coming to the clinic only once you receive the
                  call from Sanjeevan Advanced Rheumatology CARE.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
