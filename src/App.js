import React from 'react';
import { GlobalStyle } from './styles';
import { GlobalFonts } from './assets/fonts';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <React.Fragment>
      <GlobalFonts />
      <GlobalStyle />
      <Slider />
    </React.Fragment>
  );
};

export default App;
