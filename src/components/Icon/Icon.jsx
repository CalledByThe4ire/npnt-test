import React from 'react';
import Home from './Home.jsx';
import Logo from './Logo.jsx';
import Project from './Project.jsx';
import Arrow from './Arrow.jsx';

const Icon = (props) => {
  switch (props.name) {
    case 'logo':
      return <Logo {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'project':
      return <Project {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    default:
      return;
  }
};

export default Icon;
