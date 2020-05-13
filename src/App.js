import React from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Header from "./components/header";
import WordCloud from "./components/word-cloud";
import LineHeader from "./components/line-header";
import WhoAmI from "./components/who-am-i";
import MyWork from "./components/my-work";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WordCloud />
      <LineHeader text="About Me" color="#62cecf" justify="center" />
      <WhoAmI />
      <LineHeader text="My work" color="#f4a33b" justify="left" />
      <MyWork />
      <LineHeader text="Recent projects" color="#e36398" justify="right" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
