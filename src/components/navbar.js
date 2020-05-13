import React, { Component } from "react";
import { FaBars, FaUniversalAccess } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <div id="Navbar" className="Navbar">
        <div className="hamburger-container">
          <FaBars />
        </div>
        <div className="access-container">
          <FaUniversalAccess />
        </div>
      </div>
    );
  }
}

export default Navbar;
