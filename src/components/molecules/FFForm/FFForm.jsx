import React from 'react'

const FFForm = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  )
}

export default FFForm
