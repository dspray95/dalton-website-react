import React, { Component } from "react";
import weWereHere from "../img/we-were-here.png";
import thisIsNormal from "../img/this-is-normal.png";
import designer from "../img/designer.png";
import yourProject from "../img/yourproject.png";

class MyWork extends Component {
  render() {
    return (
      <div id="my-work" className="work-wrapper">
        <div className="work">
          <div className="work-row">
            <img src={weWereHere} alt="" className="work-row-img" />
            <div className="work-row-text">
              <h2>Accessibility</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id pellentesque velit. Suspendisse nec odio dui. Morbi
                quis ultricies purus. Proin justo ex, luctus sit amet ultricies
                at, lacinia et sem. Donec feugiat in ligula a mattis.
                Pellentesque id est at lectus molestie varius. Nullam eget
                mauris enim. Nulla eu erat dolor. Phasellus in porta leo, vel
                eleifend sem.
              </p>
            </div>
          </div>
          <div className="work-row">
            <img src={thisIsNormal} alt="" className="work-row-img" />
            <div className="work-row-text">
              <h2>Accessibility</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id pellentesque velit. Suspendisse nec odio dui. Morbi
                quis ultricies purus. Proin justo ex, luctus sit amet ultricies
                at, lacinia et sem. Donec feugiat in ligula a mattis.
                Pellentesque id est at lectus molestie varius. Nullam eget
                mauris enim. Nulla eu erat dolor. Phasellus in porta leo, vel
                eleifend sem.
              </p>
            </div>
          </div>
          <div className="work-row">
            <img src={designer} alt="" className="work-row-img" />
            <div className="work-row-text">
              <h2>Accessibility</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id pellentesque velit. Suspendisse nec odio dui. Morbi
                quis ultricies purus. Proin justo ex, luctus sit amet ultricies
                at, lacinia et sem. Donec feugiat in ligula a mattis.
                Pellentesque id est at lectus molestie varius. Nullam eget
                mauris enim. Nulla eu erat dolor. Phasellus in porta leo, vel
                eleifend sem.
              </p>
            </div>
          </div>
          <div className="work-row" style={{ marginBottom: "0px" }}>
            <img src={yourProject} alt="" className="work-row-img" />
            <div className="work-row-text">
              <h2>Accessibility</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id pellentesque velit. Suspendisse nec odio dui. Morbi
                quis ultricies purus. Proin justo ex, luctus sit amet ultricies
                at, lacinia et sem. Donec feugiat in ligula a mattis.
                Pellentesque id est at lectus molestie varius. Nullam eget
                mauris enim. Nulla eu erat dolor. Phasellus in porta leo, vel
                eleifend sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
