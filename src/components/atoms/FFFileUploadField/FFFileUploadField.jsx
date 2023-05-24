import React from 'react'
const FFFileUploadField = ({
  label,
  labelClassName,
  boxClassName,
  icon,
  descriptiveText,
}) => {
  return (
    <>
      <label className={`${labelClassName}`}>{label}</label>
      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class={`${boxClassName}`}>
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            {icon}
            {descriptiveText && (
              <>
                <p className="text-[#DEB225] text-sm mt-2 text-center font-semibold">
                  Drag and drop your file
                </p>
                <p className="text-[#DEB225] text-sm mb-3 text-center font-semibold">
                  or click to <span className="underline">Browse</span>
                </p>
                <p class="text-semibold text-xs text-gray-500 dark:text-gray-400">
                  Supported Files: .png .jpg .jpeg
                </p>
              </>
            )}
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
    </>
  )
}

export default FFFileUploadField
