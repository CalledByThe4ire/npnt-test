import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style = {},
  fill = '#272727',
  width = '100%',
  height = width,
  className = 'svg-icon--home',
  viewBox = '0 0 43.875 38.438',
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
      d="M1.901 20.351L22.212 1.808l19.756 18.541.479-.492L22.452 1.085a.338.338 0 00-.474 0L1.429 19.855zm5.07-.155V37.1a.339.339 0 00.342.342h10.551a.341.341 0 00.241-.1.346.346 0 00.1-.242v-9.845h7.834V37.1a.34.34 0 00.342.342h10.735a.336.336 0 00.241-.1.348.348 0 00.1-.242V20.2h-.681v16.559H26.72v-9.846a.35.35 0 00-.1-.245.339.339 0 00-.241-.1h-8.515a.345.345 0 00-.243.1.361.361 0 00-.1.245v9.846H7.652V20.2H6.97z"
      fill={fill}
      stroke={fill}
      strokeWidth="2"
      fillRule="evenodd"
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
