const validateProductName = ({ productName, setProductNameError }) => {
  return productName && productName.length < 5
    ? setProductNameError('Product name is too short')
    : productName && productName.length > 50
    ? setProductNameError('Try to make product name short and meanfull')
    : setProductNameError('')
}
const validateNumericInput = (e) => {
  const keyCode = e.keyCode || e.which
  const isControlKey = e.ctrlKey || e.metaKey
  const keyValue = String.fromCharCode(keyCode)
  const inputValue = e.target.value
  const decimalIndex = inputValue.indexOf('.')
  const hasDecimalPoint = decimalIndex !== -1

  const isValidKey =
    keyCode === 8 || // Backspace
    keyCode === 9 || // Tab
    keyCode === 46 || // Delete
    keyCode === 37 || // Left Arrow
    keyCode === 39 || // Right Arrow
    (keyCode === 190 &&
      !hasDecimalPoint &&
      decimalIndex === -1 &&
      inputValue !== '') || // Decimal point (.) if not already present and not at the beginning
    (keyCode >= 48 && keyCode <= 57) || // Numeric keys (top row)
    (keyCode >= 96 && keyCode <= 105) // Numeric keys (numpad)

  if (!isControlKey && !isValidKey) {
    e.preventDefault()
  }
}

export { validateProductName, validateNumericInput }
