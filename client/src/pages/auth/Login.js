import React, { useEffect } from "react";
import "./Sign.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get(""),
      password: data.get(""),
    });
    dispatch(
      login(
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        navigate
      )
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Home");
    }
  }, [isAuthenticated]);
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(https://i0.wp.com/www.whitneyfinuf.com/wp-content/uploads/2019/08/fashion-photographer-red-fashion-photoshoot-vogue-italy-whitney-finuf-photography-3.jpg?fit=1500%2C1001&ssl=1)`,
      }}
    >
      <div id="login-form" className="login-page">
        <div className="form-box">
          <form
            id="login"
            className="input-group-login"
            onSubmit={handleSubmit}
          >
            <h3>Welcome </h3>
            <input
              type="email"
              className="input-field"
              placeholder=" Your email"
              required
              id="email"
              name="email"
              label="email"
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
              label="Password"
              id="password"
              name="password"
              autoComplete="current-password"
            />
            <input type="checkbox" className="check-box-login" />
            <span className="login-span">Remember Password</span>
            <button type="submit" className="submit-btn">
              Log in
            </button>
            {error && <p style={{ color: "red" }}>Somthing went wrong!!</p>}
            <div>
              <p style={{ fontSize: 14 }}>
                Don't have an account?{" "}
                <Link to="/Register" style={{ color: "#f3c693", fontSize: 14 }}>
                  {" Sign Up"}
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
