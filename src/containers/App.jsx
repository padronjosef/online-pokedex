import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Stack from "../components/Stack";
import Portfolio from "../components/Portfolio";
import Studies from "../components/Studies";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import AOS from 'aos';

import "./assets/style.scss";

AOS.init();

const App = () => (
  <div className="app">
    <Header />
    <Main/>
    <Stack/>
    <Portfolio/>
    <Studies/>
    <Blog/>
    <Footer/>
  </div>
);

export default App;
