import { NavLink } from "react-router-dom";
import Logout from "./Logout.jsx"
import SignInButton from './SignInButton.jsx';
import ProfileInfo from "./ProfileInfo.jsx";

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers the content horizontally
    alignItems: 'center',     // Centers the content vertically
    gap: '10px'
  };

  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-brand">
        SuperM
      </NavLink>
      <ul style={containerStyle}>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            {sessionStorage.getItem("loggedIn") ? <ProfileInfo/> : <></>}
          </NavLink>
        </li>
        <li>
         {sessionStorage.getItem("loggedIn") ? <Logout /> : <SignInButton/>}
        </li>
      </ul>
    </nav>
  );
}
