import React from 'react';

const SVG = ({
  style = {},
  fill = '#ffffff',
  width = '100%',
  height = width,
  className = 'svg-icon--use',
  viewBox = '0 0 135 126',
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
    <defs>
      <style>
        {`
        .cls
        {
        fill-rule: evenodd;
        fill: #329bd0;
        }
          `}
      </style>
    </defs>
    <path
      d="M18.594 99.1a58.055 58.055 0 014.44-81.291m77.3-.989a58.058 58.058 0 017.165 80.369"
      fillRule="evenodd"
      strokeWidth="4"
      fill="none"
      stroke="#fff"
    />
    <path
      className="cls"
      d="M68.649 0A58.434 58.434 0 119.993 58.43 58.545 58.545 0 0168.649 0z"
      transform="translate(-.375)"
    />
    <path
      d="M59.03 0A58.434 58.434 0 11.374 58.43 58.545 58.545 0 0159.03 0z"
      transform="translate(-.375)"
      fill="#aae2ff"
      fillRule="evenodd"
    />
    <circle cx="58.797" cy="57.656" r="43.078" fill="#94dbff" />
    <circle cx="55.594" cy="57.672" r="37.75" fill="#aae2ff" />
    <path
      className="cls"
      d="M50 38v85s-.126 2-4 2c-4.749 0-5-2-5-2v-21c0-2.374 2.8-3.8 3-5a58.689 58.689 0 000-6h-3V48c0-8.2 9-10 9-10zm-14 0v29l-8 7v5s3 .4 3 3v41s-.4 2-4 2-5-2-5-2V82c0-2.5 3-3 3-3v-5l-8-7V38h3v29h5V38h3v29h5V38h3z"
      transform="translate(-.375)"
    />
    <circle
      cx="107.625"
      cy="96"
      r="23.938"
      fill="#1f88cb"
      stroke="#f2f2f2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
    />
    <path
      d="M112.235 90.162l-3.92 5.364-3.8-5.364h-5.64l6 7.956-6.4 8.244h5.32l4.36-5.832 4.2 5.832h5.6l-6.4-8.46 6-7.74h-5.32z"
      transform="translate(-.375)"
      fill="#f2f2f2"
      fillRule="evenodd"
    />
  </svg>
);

export default SVG;
