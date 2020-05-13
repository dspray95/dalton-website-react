import React, { Component } from "react";
import header from "../img/header.png";

class Header extends Component {
  render() {
    return (
      <div id="header" className="header-wrapper">
        <div className="header">
          <p>
            <i>Hey, I'm</i>
          </p>
          <img src={header} alt="" className="header-img" />
          <p>Let's make digital&nbsp; .&nbsp; .&nbsp; .</p>
        </div>
      </div>
    );
  }
}

export default Header;
