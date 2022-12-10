import React, { useState , useEffect} from "react";
import jspdf from "jspdf";
import axios from "axios";

import logo from "../../images/logo1.png";
const Booking = () => {
  const [slots, setslots] = useState([]);
  const [_id,setId] = useState();
  const [connect, connectdata] = useState({
    name: "",
    lname: "",
    address: "",
    email: "",
    phone: "",
    date: "",
    doctor: "",
  });
  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    connectdata({ ...connect, [name]: value });
  };
  const getavailableslots = async () => {
    const res = await fetch("/getslots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setslots(data[0].slots);
    setId(data[0]._id);
    if (!data) {
      console.log("slots not added");
    } else {
      console.log(" slots fetched Successfully");
    }
  };
  useEffect(() => {
    getavailableslots();
  }, []);

  const reduceSlotsbyone = async () =>{
        const newslots = slots - 1;
        setslots(newslots);
        const res = await fetch("/decreaseslots", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: _id,
            slots: newslots,
          }),
        });
        const data = await res.json();
        if (!data) {
          console.log("slots not added");
        }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { name, lname, address, email, phone, date, doctor } = connect;
    reduceSlotsbyone();
    if(slots>0){
      await axios
      .post("/sendmail", connect)
      .then((response) => alert("mail sent successfully !!"));

    const doc = new jspdf();
    doc.addImage(logo, "PNG", 90, 10, 30, 10);
    doc.setFontSize(25);
    doc.setTextColor(4, 61, 120);
    doc.text("Appointment Letter", 75, 30);
    doc.setFontSize(15);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica");
    doc.rect(15, 35, 170, 140);

    doc.text("Name: " + name, 20, 50);
    doc.text("Last Name: " + lname, 20, 60);
    doc.text("Address: " + address, 20, 70);
    doc.text("Email: " + email, 20, 80);
    doc.text("Phone: " + phone, 20, 90);
    doc.text("Date: " + date, 20, 100);
    doc.text("Doctor: " + doctor, 20, 110);
    doc.text("Token number : " + (20 -slots), 20, 120);

    doc.setFontSize(12);
    doc.text("Thank you for booking an appointment with us.", 20, 130);
    doc.setFillColor(255, 0, 0);
    doc.setTextColor(255, 0, 0);
    doc.text(
      "Note : Now you can go to the hospital with this appointment letter ans  ",
      20,
      140
    );
    doc.text(
      "show the appointment letter to the Receptionist and follow the further procedure.",
      30,
      145
    );
    doc.text("and get the doctor and get your appointment done.", 30, 150);
    doc.save("appointment.pdf");
    }else{
      alert("Sorry, slots are full for today");
    }
   
  };
  return (
    <div className="marn-top booking text-dark">
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center blue_color ">
            <b> Book Appointment </b>
          </h1>
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
                      className="text-dark"
                      value={connect.name}
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
                      className="text-dark"
                      value={connect.lname}
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
                      className="text-dark"
                      name="email"
                      placeholder="Enter your email"
                      value={connect.email}
                      onChange={handleinputs}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="number"
                      id="mob"
                      name="phone"
                      className="text-dark"
                      placeholder="Enter your phone number"
                      value={connect.phone}
                      onChange={handleinputs}
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      date<span className="text-danger"> *</span>
                    </label>
                    <input
                      type="date"
                      id="job"
                      name="date"
                      className="text-dark"
                      placeholder="Enter the date for appointment "
                      value={connect.date}
                      onChange={handleinputs}
                    />
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
                    <input
                      type="text"
                      id="ans"
                      name="address"
                      placeholder="Enter your address "
                      className="text-dark"
                      value={connect.address}
                      onChange={handleinputs}
                    />
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
                    <button
                      type="submit"
                      className="btn-block  buttn"
                      onClick={onSubmit}
                      style={{ backgroundColor: "#225a97" }}
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
