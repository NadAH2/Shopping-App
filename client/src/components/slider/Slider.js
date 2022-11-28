import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="container">
          <img
            src="https://i.pinimg.com/564x/71/eb/73/71eb73087cdebc96a7df40532087a283.jpg"
            style={{ width: "100%" }}
          />
          <Link to="/products" className="link btn primary btn-dark ">
            SHOP Now
          </Link>
        </div>
        <img
          src="https://i.pinimg.com/564x/db/07/92/db079278a212560fdac754d86f7dd4d3.jpg"
          style={{ width: "100%" }}
        />
        <img
          src="https://i.pinimg.com/564x/38/40/71/38407144553ac7ef68644f37d28bc90d.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <div className="column">
        <img
          src="https://i.pinimg.com/564x/78/7c/19/787c19434148fe7773b6d743f820ccb7.jpg"
          style={{ width: "100%" }}
        />
        <div className="container">
          <img
            src="https://i.pinimg.com/564x/0e/a3/9b/0ea39bc3f9a0bdfcc3026a3bf4a8e9c5.jpg"
            style={{ width: "100%" }}
          />
          <Link to="/products" className="link btn primary btn-dark ">
            SHOP Now
          </Link>
        </div>
        <div className="container">
          <img
            src="https://i.pinimg.com/564x/15/7c/db/157cdb0a87dad4ff1a3facbbce242b17.jpg"
            style={{ width: "100%" }}
          />

          <Link to="/products" className="link btn primary btn-dark ">
            SHOP Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
