import React, { useEffect } from 'react'
import Home from './Home';
const Success = () => {
  
  setTimeout(function() {
    window.location.replace('https://superm-solution-vite-react18-usefetch.vercel.app/home');
    localStorage.setItem("cart", []);
  }, 7000);
  
  return (
    <>
  <title>Thanks for your order!</title>
  <h1>Thanks for your order!</h1>
  <p>
    We appreciate your business! If you have any questions, please email
    <a href="mailto:orders@example.com"> contact@gmail.com</a>.
  </p>
  <p className='blink'>
    Redirecting to Home Page ...
  </p>
</>

  )
}

export default Success