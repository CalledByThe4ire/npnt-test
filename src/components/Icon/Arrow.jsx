import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style = {},
  fill = '#ffffff',
  width = '100%',
  height = width,
  className = 'svg-icon--arrow',
  viewBox = '0 0 20 14',
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
      fill="none"
      stroke={fill}
      strokeWidth="1.171"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M.63 6.9h18.74M12.907.636L19.37 6.9m0 0l-6.264 6.464"
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
