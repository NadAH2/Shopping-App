import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";
import axios from "axios";
import { publicRequest } from "../requestMethods";
// import { Navigate, useParams } from "react-router";
// Load User

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    var config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
  }

  try {
    const res = await axios.get(`http://localhost:5000/api/users/find`, config);
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register user
export const register = (newUser, navigate) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      newUser,
      config
    );
    console.log(res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data });
  }
};

// Login User
export const login = (formData, navigate) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  try {
    const res = await publicRequest.post("/auth/login", formData, config);
    console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    // dispatch(loadUser());
    navigate("/home");
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};
//logout

export const logout = (navigate) => {
  navigate("/");
  return { type: LOGOUT };
};

// Clear Errors
export const clearErrors = () => ({ type: CLEAR_ERRORS });
