import React from "react";
import "./Cart.css";
import { bags } from "../../data";
import Bag from "../bag/Bag";
import Navbar from "../../components/navbar/Navbar";

const oneCart = ({ item }) => {
  return (
    <div>
      <Navbar />
      {/* <div>
        <span className="BagWish">Shopping Bag(2)</span>
      </div>
      <div>
        <span className="BagWish">Your Wishlist(0)</span>
      </div> */}
      <div id="blog-home" className="pt-3 mt-4 container my-4" style={{}}>
        <h2 className="font-weight-bold pt-5">YOUR SHOPPING CART </h2>
        <hr />
      </div>

      <div id="cart-container" className="container sp">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </td>
              <td>
                <img
                  //  src={item.src}
                  alt=""
                ></img>{" "}
              </td>
              <td>
                <h5>{/* {item.title} */}</h5>
              </td>
              <td>
                <h5>{/* {item.price} */}</h5>
              </td>
              <td>
                <input className="w-25 pl-1 " value={"1"} type={"number"} />
              </td>
              <td>
                <h5></h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="cart-bottom" className="container">
        <div className="row">
          {/* <div className=" coupon col-lg-6 col-md-6 col-12 mb-4">
            <div className="border">
              <h5>COUPON</h5>
              <p>Ennter your code coupon please..</p>
              <input type={"text"} placeholder="Coupon Code" />
              <button>APPLY</button>
            </div>
          </div> */}
          <div className=" total col-lg-6 col-md-6 col-12">
            <div className="border">
              <h5>CART TOTAL</h5>
              <div className="d-flex jutify-content-between">
                <h6>Subtotal</h6>
                <p>$</p>
              </div>
              <div className="d-flex jutify-content-between">
                <h6>Shipping</h6>
                <p>$</p>
              </div>
              <hr className="secondHR" />
              <div className=" d-flex jutify-content-between">
                <h6>Total</h6>
                <p>$</p>
              </div>
              <button className="btn ml-auto">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default oneCart;
