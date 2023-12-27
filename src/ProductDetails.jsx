import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";
import useFetch from "./useFetch";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
  const params = useParams();
  const productFromCart = props.cart.find(
    
    (item) =>
      item.id+""  === params.id +""
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  console.log( "1",props,"2", productFromCart , "3", quantity)
  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
  }, []);
  console.log(props);
  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <div className="product-image-container">
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
        {quantity > 0 && (
          <div className="product-quantity-container-details">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
        </div>
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to=""
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="nutrition"
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>

        <Outlet context={product} />
      </div>
    </div>
  );
}
