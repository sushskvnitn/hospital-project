import React, { useState } from "react";

const Addticker = () => {
  const [update, setupdate] = useState({
    ticker: "",
    link: "",
    newicon: "",
  });
  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setupdate({ ...update, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      if(update.ticker === "" ){
        alert("please fill update details")
      }
      else{
            fetch("/ticker", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json",
            },
            body: JSON.stringify({
                  ticker: update.ticker,
                  link: update.link,
                  newicon: update.newicon,
            }),
            })
            .then((res) => res.json())
            .then((data) => {
                  if (data.status === 422 || !data) {
                  window.alert("cannot add update");
                  } else {
                  window.alert("update added successfully");
                  console.log("update added successfully");
                  }
            });
            }

    } catch (error) {
      console.error(error + "error");
    }
  };

  return (
    <form>
      <div className=" d-flex justify-content-center">
        <div style={{ width:"60rem",backgroundColor: '#fff',padding:"20px",borderRadius: "10px",margin:"2rem"}}>
          <div className="mb-3 " >
            <label for="formGroupExampleInput" className="form-label">
              Update
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter the update text here "
              name="ticker"
              onChange={handleinputs}
              value={update.ticker}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              link
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Paste update link here "
              name="link"
              onChange={handleinputs}
              value={update.link}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              show new icon ?
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter yes for showing  "
              name="newicon"
              onChange={handleinputs}
              value={update.newicon}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn dark_blue text-white"
              onClick={handlesubmit}
            >
              Add update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Addticker;
