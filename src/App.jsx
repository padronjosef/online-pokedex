import React, { useState } from 'react';
import AOS from 'aos';
import { BurgerBtn, Header, Main, About, Stack, Portfolio, Studies, Blog, Footer } from './components';
import './assets/style.scss';

const App = () => {
  const [showHeader, setshowHeader] = useState(false)

  const toogleHeader = () => setshowHeader(!showHeader)

  AOS.init();

  return (
    <div className='app'>
      <BurgerBtn showHeader={showHeader} toogleHeader={toogleHeader} />
      <Header showHeader={showHeader} toogleHeader={toogleHeader} />
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
