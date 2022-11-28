import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: {},

  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        // token: payload.accessToken,
        // isAuthenticated: true,
        // loading: true,
      };
    case REGISTER_FAIL:
      return { ...state, errors: payload };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.accessToken,
        user: { ...payload },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: null,
        loading: true,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
