import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailNutrition from "./ProductDetailNutrition";
import ProductDetailStorage from "./ProductDetailStorage";
import Cart from "./Cart";
import Success from "./Success";
import Cancel from "./Cancel";
import LoginSignUpPage from "./LoginSignUpPage";
import PrivateRoute from "./PrivateRoute";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoDetails from "./ProfileInfoDetails";

function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAddByOne(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDeleteByOne(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id && product.quantity === 1) {
          // Remove the product from the cart if its quantity is 1
          return null;
        } else if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      // Filter out null values (products to be removed) and update the cart
      setCart(updatedCart.filter((product) => product !== null));
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginSignUpPage />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/about"
              element={<PrivateRoute element={<About />} />}
            />
            <Route
              path="/products"
              element={
                <PrivateRoute
                  element={
                    <Products
                      cart={cart}
                      onProductAdd={handleProductAddByOne}
                      onProductDeleteByOne={handleProductDeleteByOne}
                      onProductDelete={handleProductDelete}
                    />
                  }
                />
              }
            />
            <Route
              path="/success"
              element={<PrivateRoute element={<Success />} />}
            />
            <Route
              path="/cancel"
              element={<PrivateRoute element={<Cancel />} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute element={<ProfileInfoDetails />} />}
            />
            <Route
              path="/products/:id/"
              element={
                <PrivateRoute
                  element={
                    <ProductDetails
                      cart={cart}
                      onProductAdd={handleProductAddByOne}
                      onProductDelete={handleProductDeleteByOne}
                    />
                  }
                />
              }
            >
              <Route
                path=""
                element={
                  <PrivateRoute
                    element={
                      <ProductDetailInfo
                        onProductAddByOne={handleProductAddByOne}
                        onProductDeleteByOne={handleProductDeleteByOne}
                      />
                    }
                  />
                }
              />
              <Route
                path="nutrition"
                element={<PrivateRoute element={<ProductDetailNutrition />} />}
              />
              <Route
                path="storage"
                element={<PrivateRoute element={<ProductDetailStorage />} />}
              />
            </Route>

            <Route
              path="/cart"
              element={<PrivateRoute element={<Cart cart={cart} />} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
