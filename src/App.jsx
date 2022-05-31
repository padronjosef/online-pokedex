import React, { useState } from 'react';
import AOS from 'aos';
import { ContextProvider } from '/src/context';
import { BurgerBtn, Header, Main, About, Stack, Portfolio, Studies, Blog, Footer } from './components';
import './assets/style.scss';

const App = () => {
  const [showHeader, setshowHeader] = useState(false)

  const toogleHeader = () => setshowHeader(!showHeader)

  AOS.init();

  return (
    <ContextProvider>
      <div id='theme' className='theme theme--animation'>
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
    </ContextProvider>
  );
};

export default App;
