import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const userdata = {
      username: user,
      email: email,
      password: password,
    };
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userdata),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        alert("invalid credentials");
      } else if (res.status === 422) {
        alert("Fill all fields properly ");
      } else {
        history("/doctorhandle");
      }
    } catch (error) {
      alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="login-page bg-light marn-top">
        <div
          className="container"
          
        >
          <div className="row" >
            <div className="col-lg-10 offset-lg-1">
              <h1 className="mb-3">
                {" "}
                <b>Doctor's Login </b>
              </h1>
              <div className="bg-white my-4 rounded" style={{
boxShadow: "#000000 10px 8px 38px 5px"
          }}>
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4">
                        <div className="col-12">
                          <label>
                            Username<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Username"
                              value={user}
                              onChange={(e) => setUser(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn  px-4 mt-1  "
                            onClick={login}
                            style={{
                              backgroundColor: "#043d78",
                              color: "white",
                            }}
                          >
                            login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right   text-white ">
                      <img
                        className="img-fluid my-5 "
                        src="https://images.pexels.com/photos/249348/pexels-photo-249348.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        srcSet=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
