import React, { Component } from "react";

class LineHeader extends Component {
  constructor(props) {
    super(props);
    let style = {
      textAlign: this.props.justify,
      borderColor: this.props.color,
    };

    this.state = {
      style: style,
    };
  }

  componentDidMount() {
    console.log(this.props.text);
    console.log(this.props.color);
    console.log(this.props.justify);
  }

  render() {
    let borderLeft;
    let borderRight;

    let headerStyle;

    if (this.props.justify === "left") {
      borderLeft = "";
      borderRight = (
        <div className="border-right" style={this.state.style}></div>
      );
      headerStyle = { marginLeft: "4vw" };
    } else if (this.props.justify === "right") {
      borderLeft = <div className="border-left" style={this.state.style}></div>;
      borderRight = "";
      headerStyle = { marginRight: "4vw" };
    } else {
      borderLeft = <div className="border-left" style={this.state.style}></div>;
      borderRight = (
        <div className="border-right" style={this.state.style}></div>
      );
      headerStyle = {};
    }

    return (
      <div id="line-header" className="line-header" style={this.state.style}>
        {borderLeft}
        <h1 style={headerStyle}>{this.props.text}</h1>
        {borderRight}
      </div>
    );
  }
}

export default LineHeader;
