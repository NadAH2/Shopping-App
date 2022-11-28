import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

const Product = ({ item }) => {
  return (
    <>
      <div className="product-grid">
        <div className="product-image">
          <a href="#" className="image">
            <img className="pic-1" src={item.img} />
          </a>

          <ul className="product-links">
            <li>
              <a href="#" data-tip="Add to Wishlist">
                <i className="fas fa-heart"></i>
              </a>
            </li>

            <li>
              <Link to={`/singleProduct/${item._id}`} data-tip="Quick View">
                <i className="fa fa-search"> </i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="product-content">
          {/* <ul className="rating">
          <li className="fas fa-star"></li>
          <li className="fas fa-star"></li>
          <li className="fas fa-star"></li>
          <li className="fas fa-star"></li>
          <li className="far fa-star"></li>
        </ul> */}

          <h3 className="title">
            <a href="#">{item.title}</a>
          </h3>
          <div className="price">${item.price}</div>
          {/* <p style={{color:"black"}}> {item.cat} </p> */}

          <Link className="add-to-cart" to={`/singleProduct/${item._id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
