import React from 'react';
import Home from './Home.jsx';
import Logo from './Logo.jsx';
import Project from './Project.jsx';
import Arrow from './Arrow.jsx';
import Plus from './Plus.jsx';
import Use from './Use.jsx';
import Duration from './Duration.jsx';

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
    case 'plus':
      return <Plus {...props} />;
    case 'use':
      return <Use {...props} />;
    case 'duration':
      return <Duration {...props} />;
    default:
      return;
  }
};

export default Icon;
