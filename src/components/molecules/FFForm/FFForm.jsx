import React from 'react'

const LAForm = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  )
}

export default LAForm
