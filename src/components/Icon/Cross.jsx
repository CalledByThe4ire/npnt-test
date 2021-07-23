import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style = {},
  fill = '#242424',
  width = '100%',
  height = width,
  className = 'svg-icon--cross',
  viewBox = '0 0 44 44',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M24.018 22L43.582 2.437a1.426 1.426 0 10-2.016-2.02L22 19.983 2.433.418a1.424 1.424 0 00-2.016 0 1.428 1.428 0 00.001 2.019L19.982 22 .418 41.563A1.43 1.43 0 001.426 44c.365 0 .729-.14 1.007-.417L22 24.018l19.566 19.565a1.424 1.424 0 002.017-.001 1.43 1.43 0 000-2.02L24.017 22z"
    />
  </svg>
);

SVG.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
  className: PropTypes.string,
};

export default SVG;
