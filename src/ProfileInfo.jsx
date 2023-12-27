import React from 'react';
import ProfilePhoto from "./assets/profile.png";

const ProfileInfo = () => {
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
        <div style={containerStyle}>
          <img src={ProfilePhoto} alt="Profile" style={imageStyle} />
        </div>
      );
}

export default ProfileInfo