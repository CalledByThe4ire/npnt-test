import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro/Intro.jsx';
import Details from './Details/Details.jsx';
import Guide from './Guide/Guide.jsx';

const View = (props) => {
  switch (props.name) {
    case 'intro':
      return <Intro {...props}>{props.children}</Intro>;
    case 'details':
      return <Details {...props}>{props.children}</Details>;
    case 'guide':
      return <Guide {...props}>{props.children}</Guide>;
    default:
      return;
  }
};

View.propTypes = {
  name: PropTypes.string.isRequired,
};

export default View;
