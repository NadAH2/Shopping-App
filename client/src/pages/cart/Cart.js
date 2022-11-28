import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import {
  decreaseCart,
  getTotals,
  removeFromCart,
  addToCart,
} from "../../redux/cartRedux";
// import PayButton from "../../components/PayButton";
// import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;
const hStyleLeft = {
  TextDecodration: "underline",
  cursor: "pointer",

  color: "black",
  bottom: "0",
  marginTop: "30",
  display: "inline-block",
  padding: "5px 10px",
  left: "25%",
  fontSize: "15px",
};
const hStyleRight = {
  TextDecodration: "underline",
  cursor: "pointer",
  marginTop: "30",
  color: "black",
  bottom: "0",

  display: "inline-block",
  padding: "5px 10px",
  right: "25%",
  fontSize: "15px",
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.cartTotalAmount,
        });

        navigate("/success", {
          // stripeData: res.data,
          // products: cart,
          data: res.data,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.cartTotalAmount]);
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <div className="title" style={{ fontWeight: 300, textAlign: "centre" }}>
          <h3 style={{ paddingTop: 10 }}> YOUR SHOPPING BAG</h3>
          {/* <hr /> */}
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/products" className="btn btn-outline-dark px-3 py-2 my-4">
            CONTINUE
          </Link>
          <div className="d-flex justify-content-between">
            <span style={hStyleLeft}>Shopping Bag(2)</span>
            <span style={hStyleRight}> Your Wishlist(0)</span>
          </div>
          <button className="btn btn-outline-dark px-3 py-2 my-4 ml-auto">
            CHECKOUT
          </button>
        </div>
      </div>
      <div id="cart-container" className=" sp">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Color</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>total</td>
            </tr>
          </thead>
          {cart.products.map((product) => (
            <tbody>
              <tr>
                <td>
                  <button onClick={() => handleRemove(product)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>
                  <img src={product.img} alt=""></img>
                </td>
                <td>
                  <h5>{product.title}</h5>
                </td>
                <td>
                  <h5>{product.color}</h5>
                </td>
                <td>
                  <h5>${product.price}</h5>
                </td>
                <td>
                  <div className="input-group">
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={() => handleDecrease(product)}
                    >
                      -
                    </button>
                    <div className="form-control text-center  ">
                      {product.cartQuantity}
                    </div>
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={() => handleAddToCart(product)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <p style={{ color: "black" }}>
                    {product.price * product.cartQuantity}
                  </p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div id="cart-bottom">
        <div className="row">
          <div className=" total col-lg-6 col-md-6 col-12">
            <div className="border">
              <h5>CART TOTAL</h5>
              <div className=" montant d-flex jutify-content-between">
                <div className="front-start">
                  <h6>Subtotal :</h6>
                </div>
                <div className="front-end">
                  <h6>{cart.cartTotalAmount}</h6>
                </div>
              </div>
              <div className=" montant d-flex jutify-content-between">
                <div className="front-start">
                  <h6>Shipping :</h6>
                </div>
                <div className="front-end">
                  <h6>0%</h6>
                </div>
              </div>
              <hr className="secondHR" />
              <div className=" d-flex  flex-row bd-highlight mb-6">
                <div className="montant d-flex  jutify-content-between">
                  <div className="front-start">
                    <h6>Total :</h6>
                  </div>
                  <div className="front-end">
                    <h6>${cart.cartTotalAmount}</h6>
                  </div>
                </div>
                <div className=" front-end ">
                  <StripeCheckout
                    name=" NadiaHolic"
                    image="./logoN.png"
                    billingAddress
                    shippingAddress
                    description={`Your total is  $${cart.cartTotalAmount}`}
                    amount={cart.cartTotalAmount * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <button
                      className=" btn btn-outline-dark px-2 py-2 my-6 ml-auto float-end"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        bottom: 0,
                      }}
                    >
                      CHECKOUT NOW
                    </button>
                    {/* <PayButton products={cart.products} /> */}
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
