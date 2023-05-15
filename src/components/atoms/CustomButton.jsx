import React from 'react'

export const CustomButton = ({ type, classes, value, style }) => {
  switch (type) {
    case 'product-add':
      return (
        <button className={classes} style={style}>
          {value}
        </button>
      )

    default:
      return <div>button</div>
  }
}
