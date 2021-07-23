import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  style = {},
  fill = '#272727',
  width = '100%',
  height = width,
  className = 'svg-icon--logo',
  viewBox = '0 0 56.5 11.594',
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
      d="M4.775 1.644A3.76 3.76 0 00.103 6.353a3.4 3.4 0 002.553 2.571A3.76 3.76 0 007.33 4.216a3.378 3.378 0 00-2.555-2.572zm-1.054 6.23a2.6 2.6 0 112.441-2.6 2.419 2.419 0 01-2.441 2.602zm9.39-6.35a3.214 3.214 0 00-2.508 1.02v-.966H9.371v7.4h1.272V5.103a2.155 2.155 0 012.295-2.393 1.811 1.811 0 011.948 2.1v4.172h1.272V4.717a2.867 2.867 0 00-3.047-3.191zm8.994 0a3.237 3.237 0 00-2.548 1.114v-1.06h-1.233v10.01h1.272V7.969a3.246 3.246 0 002.508 1.077 3.762 3.762 0 00.001-7.521zm-.066 6.348a2.6 2.6 0 010-5.188 2.445 2.445 0 012.455 2.594 2.418 2.418 0 01-2.455 2.595zm18.083-6.29v7.4h1.272v-7.4h-1.272zm7.419-.055a3.215 3.215 0 00-2.508 1.02v-.966h-1.232v7.4h1.272V5.106a2.155 2.155 0 012.3-2.393 1.811 1.811 0 011.948 2.1v4.172h1.272V4.719a2.868 2.868 0 00-3.052-3.191zm8.485 5.848l-.16.145a1.39 1.39 0 01-.927.319.964.964 0 01-1.048-1.122V2.678h2.126V1.549h-2.125V.011h-1.267v6.76a2.011 2.011 0 002.209 2.21 2.384 2.384 0 001.582-.536l.092-.083zM32.77.216a5.1 5.1 0 105.051 5.086A4.911 4.911 0 0032.77.217zm2.3 7.4h-4.643a.653.653 0 01-.65-.655V3.679A.676.676 0 0130.451 3h4.618a.676.676 0 01.674.679v3.265a.677.677 0 01-.672.677z"
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
