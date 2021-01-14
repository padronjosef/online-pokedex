import React from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import MyStack from '../components/MyStack';
import Portfolio from '../components/Portfolio';
import Studies from '../components/Studies';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

import './style.css'
import background from './background.png'

const App = () =>
  <div style={{ background: `url(${background})`, backgroundAttachment: 'fixed'}}>
    <NavBar />
    <Main />
    <MyStack />
    <Portfolio />
    <Studies />
    <Articles />
    <Footer />
  </div>

export default App;