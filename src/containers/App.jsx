import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import MyStack from '../components/MyStack';
import Portfolio from '../components/Portfolio';
import Studies from '../components/Studies';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

import '../assets/styles/App.css'
import background from '../assets/static/background.png'

const App = () => {

  return (
    <div style={{ background: `url(${background})`, backgroundAttachment: 'fixed'}}>
      <NavBar />
      <Main />
      <MyStack />
      <Portfolio />
      <Studies />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;