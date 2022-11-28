import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

import { publicRequest } from "../requestMethods";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartRedux";
const SingleProduct = () => {
  const id = window.location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addToCart({ ...product, cartTotalQuantity }));
  };

  return (
    <div>
      <Navbar />
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-start"
              style={{ objectFit: "cover", height: "100%", width: "80%" }}
              src={product.img}
              alt=""
            />
          </div>
          <div className="col-md-6 ">
            <div className="card-body d-flex flex-column">
              <h4 className="text-uppercase text-black-50 my-4">
                {product.categories}
              </h4>
              <hr />
              <h1 className="card-title"> {product.title}</h1>
              <h2 className="display fw-bold my-4 ">${product.price}</h2>

              <p className="card-text text-dark pb-4  ">{product.desc}</p>
         
              <hr />
              <p
                style={{
                  color: "black",
                  fontStyle: "oblique",
                  fontSize: 20,
                }}
              >
                Status : in Stock{" "}
              </p>
              <div className="pt-4" style={{ bottom: 0 }}>
                <button
                  className="btn btn-outline-dark px-4 py-2 my-6 mt-auto"
                  onClick={handleClick}
                >
                  Add to Cart
                </button>
                <Link
                  to="/cart"
                  // to="/Cart"
                  className="btn btn-dark mt-auto ms-2 px-3 py-2"
                >
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
