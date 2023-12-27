import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutPhoto from "./assets/th.jpeg"
const Logout = () => {
  const navigate = useNavigate()
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers the content horizontally
    alignItems: 'center',     // Centers the content vertically
  };

  const imageStyle = {
    width: '30px', // Adjust the width as needed
    height: '30px', // Adjust the height as needed
    borderRadius: '50%',
  };
  return (
    
  
    
    <div  onClick={() => {
      const confirmBox = window.confirm(
        "Do you really want to logout?"
      )
      if (confirmBox === true) {
        navigate("/")
      }
    }} ><img src={LogoutPhoto} alt="Logout" className='logoutphoto'/></div>
  )
}

export default Logout