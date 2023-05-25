const validateProductName = ({ productName, setProductNameError }) => {
  return productName && productName.length < 5
    ? setProductNameError('Product name is too short')
    : productName && productName.length > 50
    ? setProductNameError('Try to make product name short and meanfull')
    : setProductNameError('')
}

export { validateProductName }
