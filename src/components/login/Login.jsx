import React ,{useState} from "react";
import {  Link,useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Login = () => {
    const history = useNavigate();
    const [user,setUser]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const userdata = {
      username:user,
      email:email,
      password:password
    }
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(userdata),
    });
    console.log(res);
    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("invalid credentials");
    }
    else {
      alert("login successful");
      history("/doctorhandle");
    }
  };


  return (
    <>
     <Link className="btn navbar_color text-white mx-4 my-2" to="/" > <ArrowBackIcon/> </Link>
     <h1 className="text-center "> Login</h1> 
    <div className=" d-flex justify-content-center ">
      
      <section className="vh-50 w-50 bg-white login_box">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample "
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter a valid username"
                    value ={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div> 
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter a valid email address"
                    value ={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter password"
                    value ={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn dark_blue text-white "
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Login;
