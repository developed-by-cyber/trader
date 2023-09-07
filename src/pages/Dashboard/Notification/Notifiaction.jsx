import "./Notification.css";
import profImg from "../../../assets/DashboardImg/profileImg.png";
import verified from "../../../assets/DashboardImg/Verified.png";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Img9 from "../../../assets/DashboardImg/logout.png";
import { domain } from "../../../config";
import { useAuth } from "../../../providers/auth";
const Notifiaction = () => {
  const user = localStorage.getItem('user')
  const userDetails = JSON.parse(user)
  const [details,setDetails] = useState(null)
  useEffect(()=>{
    fetch(`${domain}/api/v1/users/myDetails`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${userDetails.token}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setDetails(data)
    })
  },[])
  if(details === null){
    return(<></>)
  }
  // function handleLogout(e){
  //   e.preventDefault()
  //   auth.logout()
  //   navigator('/login')
  // }
  return (
    <>
      <div className="notification">
        <div className="prof">
          <Link to="/Dashboard">
            <img crossOrigin="anonymous" src={domain + details.data.photo} alt="profileImg" />
          </Link>
        </div>
        <div className="prof-name">
          <p>
            {details.data.username} <i className="hr"></i>
            {details.data.userVerified?<span>
              Verified <img src={verified} alt="verified" />
            </span>:null}
            
          </p>
        </div>
        <Link to="/login" className="logout">
            <img src={Img9} alt="account" />
          </Link>
      </div>
    </>
  );
};

export default Notifiaction;
