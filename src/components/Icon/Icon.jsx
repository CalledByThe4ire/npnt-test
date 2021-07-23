import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import Logo from './Logo.jsx';
import Project from './Project.jsx';
import Arrow from './Arrow.jsx';
import AngleBracket from './AngleBracket.jsx';
import Cross from './Cross.jsx';
import Plus from './Plus.jsx';
import Use from './Use.jsx';
import Duration from './Duration.jsx';

const Icon = (props) => {
  const { name, ...rest } = props;

  switch (name) {
    case 'logo':
      return <Logo {...rest} />;
    case 'home':
      return <Home {...rest} />;
    case 'project':
      return <Project {...rest} />;
    case 'arrow':
      return <Arrow {...rest} />;
    case 'cross':
      return <Cross {...rest} />;
    case 'plus':
      return <Plus {...rest} />;
    case 'angle-bracket':
      return <AngleBracket {...rest} />;
    case 'use':
      return <Use {...rest} />;
    case 'duration':
      return <Duration {...rest} />;
    default:
      return;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
