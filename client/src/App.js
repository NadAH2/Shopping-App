import Home from "./pages/Home";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routing/PrivateRoutes";
import { useDispatch } from "react-redux";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/products/Products";
import About from "./pages/About";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { useEffect } from "react";
import Contact from "./pages/contact/Contact";

import Cart from "./pages/cart/Cart";
import Success from "./pages/Success";
import { loadUser } from "./redux/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  }, []);
  return (
    <Router>
      <Fragment>
        <Routes>
          {/* <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> */}

          <Route path="/" element={<Login />} />
          {/* <Routes> */}
          {/* <Route element={<PrivateRoutes />} /> */}
          <Route path="/home" element={<Home />} />
          {/* </Routes> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
