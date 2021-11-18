import React from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Studies from './components/Studies';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './assets/style.scss';

const App = () => {
  AOS.init();

  return (
    <div className='app'>
      <Header />
      <Main />
      <About />
      <Stack />
      <Portfolio />
      <Blog />
      <Studies />
      <Footer />
    </div>
  );
};

export default App;
