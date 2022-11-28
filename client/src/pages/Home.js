import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import VideoSlider from "../components/slider/VideoSlider";

import { Fragment } from "react";

import Footer from "../components/footer/Footer";
import "../../src/components/footer/Footer.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function Home() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <a id="top"></a>
      <Navbar />

      <VideoSlider />

      <Slider />
      <Footer />
      <div id="back-to-top" className="back-to-top">
        <button
          className="btn btn-dark"
          title="Back to Top"
          style={{ display: "block" }}
        >
          <a href="#top">
            <i className="fa fa-angle-up"></i>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
