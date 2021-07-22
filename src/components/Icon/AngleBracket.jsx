import React from 'react';

const SVG = ({
  style = {},
  fill = '#242424',
  width = '100%',
  height = width,
  className = 'svg-icon--angle-bracket',
  viewBox = '0 0 21 34',
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
      d="M1.981 2.005l16.192 15.137L1.981 32.278"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth="4"
    />
  </svg>
);

export default SVG;
