import React from "react";
import "./Sign.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { register } from "../../redux/authAction";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const { username, email, password, password2 } = client;
  console.log(client);
  const onChange = (e) =>
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ username, email, password }, navigate));
  };

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(https://i0.wp.com/www.whitneyfinuf.com/wp-content/uploads/2019/08/fashion-photographer-red-fashion-photoshoot-vogue-italy-whitney-finuf-photography-3.jpg?fit=1500%2C1001&ssl=1)`,
      }}
    >
      <div id="login-form" className="login-page">
        <div className="form-box-register">
          <h3>Subscribe Now</h3>
          <form
            id="register"
            className="input-group-register"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="input-field-register"
              placeholder="Username"
              require
              id="username"
              name="username"
              value={username}
              onChange={onChange}
            />

            <input
              type="email"
              className="input-field-register"
              placeholder="Email"
              required
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <input
              type="password"
              className="input-field-register"
              placeholder="Password"
              required
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <input
              type="password"
              className="input-field-register"
              placeholder="Confirm Password"
              required
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
            />

            <button type="submit" className="submit-btn-register">
              Register
            </button>
            {error && (
              <span style={{ color: "red" }}>Somthing went wrong!!</span>
            )}
            <div>
              <input type="checkbox" className="check-box" />

              <span>I agree to the terms and conditions</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
