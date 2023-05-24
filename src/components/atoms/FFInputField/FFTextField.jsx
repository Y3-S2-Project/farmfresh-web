import React from 'react'

const FFTextField = ({ label, type, labelClassName, inputClassName }) => {
  return (
    <>
      <label className={`${labelClassName}`}>{label}</label>
      <input type={type} className={` ${inputClassName}`} />
    </>
  )
}

export default FFTextField
