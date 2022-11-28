import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Container">
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                  <img
                    src="./logoN.png"
                    alt="footer_logo"
                    className="img-fluid"
                    style={{ width: 100, height: 100 }}
                  />
                </a>
                <p className="footer-info-text">
                  Reference site about NadiaHolic, giving information on its
                  origins, as well as a random Lipsum generator.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-awarad">
                <img src="images/icon/best.png" alt="" />
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true"></i>
                    </div>

                    <div className="contact-info">
                      <h3>NadiaHolic</h3>
                      <p>5353 Road Avenue</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </div>

                    <div className="contact-info">
                      <h3>20001122</h3>
                      <p>Give us a call</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Subscribe</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <p>
                      Subscribe to our newsletter in order not to miss new
                      arrivals promotions and discounts of our store
                    </p>
                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <button type="submit">
                            <i className="fa fa-send"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2022, All Right Reserved NadiaHolic</span>
              </div>
              {/* <!-- End Col --> */}
              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>

                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
