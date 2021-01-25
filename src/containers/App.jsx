import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Stack from "../components/Stack";
import Portfolio from "../components/Portfolio";
import Studies from "../components/Studies";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

import assets from "../assets";
import "./style.css";
import "./responsive.css";

const background = assets.background;

const App = () => (
  <div
    style={{
      background: `url(${background.img})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <Header />
    <Main />
    <Stack />
    <Portfolio />
    <Studies />
    <Blog />
    <Footer />
  </div>
);

export default App;
