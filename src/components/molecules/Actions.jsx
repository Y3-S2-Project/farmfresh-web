import React from 'react'

export const Actions = ({ children }) => {
  return (
    <div className="flex justify-center items-center" style={{ gap: '10px' }}>
      {children.map((child, index) => (
        <div key={index} className="m-2">
          {child}
        </div>
      ))}
    </div>
  )
}
