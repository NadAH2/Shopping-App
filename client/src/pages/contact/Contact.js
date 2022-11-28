import React from "react";

import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div id="contact">
        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn btn-danger send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <div className="send-text">SEND</div>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa-solid fa-location-dot fa-2x">
                  <div className="contact-text place">City, State</div>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <div className="contact-text phone">
                    <a href="" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </div>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <div className="contact-text gmail">
                    <a href="" title="Send me an email">
                      hitmeup@gmail.com
                    </a>
                  </div>
                </i>
              </li>
            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
