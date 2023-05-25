import React from 'react'

const FFTextField = ({ label, type, labelClassName, inputClassName }) => {
  return (
    <>
      <label className={`${labelClassName}`}>{label}</label>
      <span className="text-red-600 text-xs">* Required</span>
      <input type={type} className={` ${inputClassName}`} />
    </>
  )
}

export default FFTextField
