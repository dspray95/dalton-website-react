import React, { Component } from "react";

import profileImage from "../img/dalton.png";

class WhoAmI extends Component {
  render() {
    return (
      <div id="who-am-i" className="who-am-i-wrapper">
        <div className="who-am-i">
          <div className="who-am-i-left">
            <p>
              I'm a Digital Specialist with over three and a half years of
              experience I'm currently living in Edinburgh, though I was born
              and raised in Buffalo, NY and educated in Boston. I live and work
              in the U.K as an Irish Citizen with full rights to remain. In my
              work, I harness cutting-edge data analytics to craft and inform
              accessible, inclusive, digital experiences.
            </p>
            <button className="button button-blue">More About Me</button>
          </div>
          <div className="who-am-i-right">
            {/* hello */}
            <img src={profileImage} alt="" className="who-am-i-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default WhoAmI;
