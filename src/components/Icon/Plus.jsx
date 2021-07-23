import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style = {},
  fill = '#ffffff',
  width = '100%',
  height = width,
  className = 'svg-icon--plus',
  viewBox = '0 0 25 25',
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
      d="M14.5 10.689V.009h-3.84v10.68H-.015v3.84h10.68v10.68H14.5v-10.68h10.68v-3.84H14.5z"
      fill={fill}
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
