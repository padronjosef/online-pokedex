import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Stack from "../components/Stack";
import Portfolio from "../components/Portfolio";
import Studies from "../components/Studies";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import AOS from 'aos';
import "./assets/style.scss";

AOS.init();

// const viewWidth = window.screen.width

const App = () => (
  <div className="app">
    <Header />
    <Main/>
    <About/>
    <Stack/>
    <Portfolio/>
    <Blog/>
    <Studies/>
    <Footer/>
  </div>
);

export default App;
