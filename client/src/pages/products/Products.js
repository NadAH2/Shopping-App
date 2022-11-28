import React, { useEffect } from "react";

// import { categories } from "../../data";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/navbar/Navbar";

import Product from "./Product";
import { useState } from "react";
import { useLocation } from "react-router";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");

      setData(await res.clone().json());
      setFilter(await res.json());

      console.log(filter);
    };
    getProducts();
  }, []);
  const filtredProduct = (cat) => {
    const filtredList = data.filter((x) => x.categories === cat);
    setFilter(filtredList);
  };
  return (
    <>
      <Navbar />
      <div className="buttons d-flex justify-content-center mb-5 pb-5  ">
        <button
          className="btn btn-outline-dark me-2 "
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2 "
          onClick={() => filtredProduct("dress")}
        >
          Dress
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filtredProduct("suit")}
        >
          Suit
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filtredProduct("bag")}
        >
          Bag
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filtredProduct("shoes")}
        >
          Shoes
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filtredProduct("coat")}
        >
          Coat
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filtredProduct("shirt")}
        >
          Shirt
        </button>
      </div>
      <div className="grid-container">
        {filter.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
