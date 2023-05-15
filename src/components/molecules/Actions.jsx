import React from 'react'

export const Actions = ({ children }) => {
  return (
    <div className='flex justify-around items-center' style={{ gap: '10px' }}>
      {children}
    </div>     
  )
}
