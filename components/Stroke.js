import React from 'react'

const Stroke = ({width, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="14"
      viewBox="0 0 196 14"
      fill="none"
    >
      <path
        d="M1 7.54292C41.5373 3.03781 115.084 -4.13195 195 12"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  )
}

export default Stroke
