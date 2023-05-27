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
  value,
  onChange,
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
        <div className="relative w-full">
          <input
            type={type}
            className={`${inputClassName}`}
            value={value}
            onChange={onChange}
          />
          <div className="absolute">{endIcon}</div>
        </div>
      </div>
    </>
  )
}

export default FFTextField
