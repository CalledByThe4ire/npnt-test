import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Slider} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
