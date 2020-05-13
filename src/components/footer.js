import React, { Component } from "react";
import { FaLinkedin, FaFacebookMessenger, FaFacebook } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="footer">
        <div className="footer-left">
          <a href="#">PERSON</a>
          <a href="#">PERSONA</a>
          <a href="#">PERSONALITY</a>
          <a href="#">ACCESSIBILITY</a>
        </div>
        <div className="footer-social">
          <div className="footer-social-icons">
            <FaFacebook />
            <FaFacebookMessenger />
            <FaLinkedin />
          </div>
          <div className="footer-social-email">
            <a href="#">WDALTONWEIR@ME.COM</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
