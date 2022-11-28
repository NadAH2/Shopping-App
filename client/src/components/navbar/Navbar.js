import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../redux/authAction";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const out = () => {
    dispatch(logout(navigate));
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <img
          src="./N.png"
          width={80}
          height={50}
          className="navbar-brand"
          // style={{ width: 70 }}
          alt=""
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa fa-home fa-lg"></i>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/About">
                <i className="fa-solid fa-rectangle-list"></i>
                About
              </Link>
            </li> */}
            <li className="nav-item ">
              <Link className="nav-link" to="/Contact">
                <i className="fa fa-envelope-o fa-lg"></i>
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/products">
                <i className="fa-sharp fa-solid fa-store"></i>
                Products
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa-sharp fa-solid fa-store"></i>
                <span className="nav-text">Products</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Dresses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bags
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shoes
                  </a>
                </li>
              </ul>
            </li> */}

            <div className=" col navbar-nav">
              <button className="btn shop ">
                <li className="nav-item ">
                  <Link className="nav-link dropdown-item" to="/cart">
                    <i
                      className="fa-solid fa-cart-plus"
                      style={{ color: "white" }}
                    ></i>

                    <span className="badge bg-danger">{cartTotalQuantity}</span>
                  </Link>
                </li>
              </button>
            </div>

            {/* <div className="  login navbar-nav  ">
            <li className="nav-item dropdown  ">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-user"></i>
              </a> */}
            {/* <ul className="dropdown-menu bg-light"> */}

            {/* <li>
              <Link className="nav-link dropdown-item" to="/login">
                <i className="fa-solid fa-user"></i>
                Login
              </Link>
            </li> */}
            <li className="front-end">
              <a
                className="nav-link dropdown-item"
                aria-current="page"
                onClick={out}
              >
                <i className="fa fa-power-off f"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
