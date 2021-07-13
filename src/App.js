import React from 'react';
import { GlobalStyle } from './styles';
import { GlobalFonts } from './assets/fonts';

const App = () => {
  return (
    <React.Fragment>
      <GlobalFonts />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
