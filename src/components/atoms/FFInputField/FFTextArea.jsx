import React from 'react'

const FFTextArea = ({ label, type, labelClassName, textareaClassName }) => {
  return (
    <>
      <label className={`${labelClassName}`}>{label}</label>
      <textarea type={type} className={` ${textareaClassName}`} />
    </>
  )
}

export default FFTextArea
