import React ,{ useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import UploadImg from "./uploadImg";
import Addticker from "./addticker";
const DoctorHandle = () => {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState({});
  const authuser = async() => {
   try {
     const res = await fetch('/doctorinfo',{
       method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials: "include",
     });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status === 200){
        const err = new Error(res.error);
        throw err;
      }
   } catch (error) {
     console.log(error);
     navigate('/login');
   } 
  }
  useEffect(() => {
    authuser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="marn-top">
        <div className="">
          <div className="my-3" >
            <h1 className="text-center blue-text"> <b> Welcome {UserData.name} </b></h1>
            <h5 className="text-center text-danger "> Note :<b> This Page is only for the Hospital Owner</b></h5>
            <h3 className="text-center blue-text"> <b> Upload image into gallary </b></h3>
            <UploadImg />
            
          </div><br />
          <h3 className="text-center blue-text"> <b> Add New Update</b> </h3>
            <Addticker />
        </div>
      </div>
    </>
  );
};

export default DoctorHandle;
