// import React from "react";
// import "./signUp.css"
// import Front from "./Front"
// import { Link } from "react-router-dom";
// function SignInForm() {
//   const [state, setState] = React.useState({
//     email: "",
//     password: ""
//   });
//   const handleChange = evt => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   };

//   const handleOnSubmit = evt => {
//     evt.preventDefault();

//     const { email, password } = state;
//     if(sessionStorage.getItem(email)===password){
//       sessionStorage.setItem("goahed", true)
//     }else{
//       alert("please check your password")
//     }
    

//   };

//   return (
//     <div className="form-container sign-in-container">
//       <Front />
//       <form onSubmit={handleOnSubmit}>
//         <h1>Sign in</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//         />
//         {/* <a href="#">Forgot your password?</a> */}
//         <Link to="/home">Sign In</Link>
//       </form>
//     </div>
//   );
// }

// export default SignInForm;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import Front from "./Front";
import Home from "./Home";
import Button from "./Button";
function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    // Validate against your authentication logic
    if (sessionStorage.getItem(email) === password) {
      // Authentication successful
      // After successful login
sessionStorage.setItem("loggedIn", true);
navigate("/home")
    } else {
      // Authentication failed
      // After logout or session expiration
sessionStorage.setItem("loggedIn", false);

      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignInForm;
