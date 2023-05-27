import React from 'react'

export const EditIcon = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      {' '}
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.93825 17.1H4.42935L13.6156 8.475L12.1245 7.075L2.93825 15.7V17.1ZM18.1688 7.025L13.6422 2.825L16.651 0L21.151 4.225L18.1688 7.025ZM0.808105 19.1V14.85L12.0979 4.25L16.6244 8.5L5.33466 19.1H0.808105ZM12.87 7.775L12.1245 7.075L13.6156 8.475L12.87 7.775Z"
          fill="#DEB225"
        />
      </svg>
    </div>
  )
}
