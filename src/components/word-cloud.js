import React, { Component } from "react";
import wordCloud from "../img/word-cloud.png";

class WordCloud extends Component {
  render() {
    return (
      <div id="word-cloud">
        <img src={wordCloud} alt="" className="word-cloud-img" />
      </div>
    );
  }
}

export default WordCloud;
