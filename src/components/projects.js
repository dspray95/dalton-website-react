import React, { Component } from "react";

import code from "../img/code.png";
import queenOfBots from "../img/queen-of-bots.png";
import arch from "../img/arch.png";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects-wrapper">
        <div className="projects">
          <img src={arch} alt="" className="project-img" />
          <img src={queenOfBots} alt="" className="project-img" />
          <img src={code} alt="" className="project-img" />
        </div>
      </div>
    );
  }
}

export default Projects;
