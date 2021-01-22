import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import MyStack from '../components/MyStack';
import Portfolio from '../components/Portfolio';
import Studies from '../components/Studies';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

import assets from '../assets';
import './style.css'
import './responsive.css'

const background = assets.background

const App = () =>
  <div style={{ background: `url(${background.img})`, backgroundAttachment: 'fixed', backgroundSize: "cover"}}>
    <Header />
    <Main />
    <MyStack />
    <Portfolio />
    <Studies />
    <Articles />
    <Footer />
  </div>

export default App;
