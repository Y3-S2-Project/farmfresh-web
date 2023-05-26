import React from 'react'

const FFTextField = ({
  label,
  type,
  labelClassName,
  inputClassName,
  endIcon,
  startIcon,
  required = false,
  requireText,
}) => {
  return (
    <>
      <div>
        <label className={`${labelClassName}`}>
          {label}
          {required && <span className="text-red-600 align-super"> *</span>}
          {requireText && (
            <span className="text-red-600 text-xs align-super">
              {requireText}
            </span>
          )}
        </label>
        {endIcon}
        <input type={type} className={` ${inputClassName}`} />
      </div>
    </>
  )
}

export default FFTextField
