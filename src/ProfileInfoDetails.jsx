import React, { useEffect, useState } from 'react'
import ProfilePhoto from "./assets/profile.png"
const ProfileInfoDetails = () => {
    const [name, setName] = useState("userName");
    const [email, setEmail] = useState("userEmail");
    useEffect(()=>{
        setName(sessionStorage.getItem("name"));
        setEmail(sessionStorage.getItem("email"));
    }, [name, email])
  return (
    <div className="about-layout">
      <div>
        <h1>Profile</h1>
        <h4>Name : {name}</h4>
        <h4>E-mail : {email}</h4>
      </div>
      <img
        src={ProfilePhoto}
        height="183"
        width="183"
        className="rounded"
        alt=""
      />
    </div>
  )
}

export default ProfileInfoDetails