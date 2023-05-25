import React, { useState, useEffect, useRef } from 'react'
import { imageUpload, removeImage } from '../../utils/imagesFunctions'
import { useDispatch, useSelector } from 'react-redux'
import {
  add_product_modal,
  postProduct,
  getAllProducts,
  isSuccess,
  isError,
  addProductModal,
  message,
} from '../../redux/features/productSlice'

import { selectAllCategories } from '../../redux/features/categorySlice'
import {
  validateNumericInput,
  validateProductName,
} from '../../utils/validations/product'
const AddProductDetail = () => {
  const dispatch = useDispatch()
  const add_product_detail_modal = useSelector(add_product_modal)
  const succesStatus = useSelector(isSuccess)
  const errorStatus = useSelector(isError)
  const responseMessage = useSelector(message)
  //error
  const [productNameError, setProductNameError] = useState('')

  const categories = useSelector(selectAllCategories)
  const alert = (msg, type) => (
    <div
      className={`text-${type} flex felx-row  justify-center items-center py-2 px-4 w-full`}
    >
      {msg}
    </div>
  )

  //added newly
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const [imageAdded, setImageAdded] = useState(false)

  const [fData, setFdata] = useState({
    product_name: '',
    product_price: 0.0,
    product_status: 'in stock',
    product_category: '',
    product_offer: 0.0,
    product_images: [],
    product_quantity: 0,
    product_visible: true,
    product_weight: 0.0,
    product_sale_status: false,
    success: false,
    error: false,
  })

  useEffect(() => {
    setImageAdded(true)
    setSelectedFile(null)
  }, [fData?.product_images])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (fData.product_images?.length > 1) {
      setFdata({ ...fData, error: 'Please upload at least 1 image' })
      setTimeout(() => {
        setFdata({ ...fData, error: false })
      }, 2000)
    }

    try {
      const { success, error, ...data } = fData
      dispatch(postProduct(data))

      if (succesStatus) {
        dispatch(getAllProducts())
        setFdata({
          ...fData,
          product_name: '',
          product_price: 0.0,
          product_status: '',
          product_category: '',
          product_offer: 0.0,
          product_images: [],
          product_quantity: 0,
          product_visible: true,
          product_weight: 0.0,
          product_sale_status: false,
          success: succesStatus,
          error: false,
        })
        setTimeout(() => {
          setFdata({
            ...fData,
            product_name: '',
            product_price: 0.0,
            product_status: '',
            product_category: '',
            product_offer: 0.0,
            product_images: [],
            product_quantity: 0,
            product_visible: true,
            product_weight: 0.0,
            product_sale_status: false,
            success: false,
            error: false,
          })
        }, 2000)
      } else if (errorStatus) {
        setFdata({ ...fData, success: false, error: errorStatus })
        setTimeout(() => {
          return setFdata({ ...fData, error: false, success: false })
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG or GIF)')
    } else if (file.size > 1048576) {
      setError('The selected file is too large (max. 1MB)')
    } else {
      setSelectedFile(file)

      setError('')
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const handleUpload = async (e) => {
    e.preventDefault()
    if (!selectedFile) {
      return
    }
    imageUpload(selectedFile, 'itemsImages')
      .then((imageUrl) => {
        // push the imageUrl to the imageUrl array
        setFdata((prevState) => ({
          ...prevState,
          error: false,
          success: false,
          product_images: [...prevState.product_images, imageUrl],
        }))
        console.log(imageUrl)
        setSelectedFile(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleImageRemove = (imageUrl, e) => {
    e.preventDefault()
    // Remove the image from Firebase Storage
    removeImage(imageUrl)
      .then(
        // Remove the imageUrl from the formData
        setFdata((prevState) => ({
          ...prevState,
          error: false,
          success: false,
          product_images: prevState.product_images.filter(
            (url) => url !== imageUrl,
          ),
        })),

        console.log('Image removed from Firebase Storage'),
        setSelectedFile(null),
      )
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div
        onClick={() => {
          console.log('background clicked')
          dispatch(addProductModal(false))
        }}
        className={`${
          add_product_detail_modal ? '' : 'hidden'
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          add_product_detail_modal ? '' : 'hidden'
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-4 md:mt-0 relative bg-[#F5F3F0] w-8/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Add Product
            </span>
            {/* Close Modal */}
            <span
              style={{ background: '#626262' }}
              onClick={(e) => dispatch(addProductModal(false))}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {errorStatus
            ? alert(
                responseMessage !== 'All products' ? responseMessage : '',
                'red',
              )
            : ''}
          {succesStatus
            ? alert(
                responseMessage !== 'All products' ? responseMessage : '',
                'green',
              )
            : ''}
          {productNameError ? alert(productNameError, 'red') : ''}
          <form className="w-full">
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Product Name </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={fData.product_name}
                  onChange={(e) => {
                    validateProductName({
                      productName: e.target.value,
                      setProductNameError,
                    })
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_name: e.target.value,
                    })
                  }}
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Product Price (Rs.) </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={fData.product_price}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_price: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  id="price"
                />
              </div>
            </div>

            {/* Most Important part for uploading multiple image */}

            <div className="flex space-x-1 py-4">
              <div className="flex w-1/2  flex-col mt-4">
                <label htmlFor="image">Image Upload</label>
                <span className="text-red-600 text-xs">
                  * Must need 1 image
                </span>
                {imageAdded && (
                  <div className="mt-3 flex flex-row space-x-1">
                    {fData?.product_images &&
                      fData?.product_images.map((image, index) => (
                        <div className="relative " key={index}>
                          <img
                            src={image}
                            alt="product_Image"
                            className="w-20 h-20 object-cover rounded-full mr-2 mb-2"
                          />
                          <button
                            type="button"
                            className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700 transition-all duration-150"
                            onClick={(e) => handleImageRemove(image, e)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                  </div>
                )}
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={handleButtonClick}
                  className="flex flex-col mt-4"
                >
                  <div className="mt-3 flex flex-row space-x-1">
                    {selectedFile ? (
                      <div className="relative">
                        <img
                          src={selectedFile.name}
                          alt="product_Image"
                          className="w-20 h-20 object-cover rounded-full mr-2 mb-2"
                        />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {selectedFile && (
                  <button onClick={(e) => handleUpload(e)}>Upload Image</button>
                )}
                <input
                  type="file"
                  onChange={handleFileSelect}
                  ref={fileInputRef}
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="weight">Product Weight (Kg)</label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={fData.product_weight}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_weight: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  type="number"
                  className="px-4 py-2 border h-14 rounded-lg focus:outline-none "
                  id="weight"
                />
              </div>
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Status </label>
                <span className="text-red-600 text-xs">* Required</span>
                <select
                  value={fData.product_status}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_status: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  id="status"
                >
                  <option name="status" value="in stock">
                    In Stock
                  </option>
                  <option name="status" value="out of stock">
                    Out Of Stock
                  </option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Category </label>
                <span className="text-red-600 text-xs">* Required</span>
                <select
                  value={fData.product_category}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_category: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border h-14 focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories.length > 0
                    ? categories.map(function (elem) {
                        return (
                          <option name="status" value={elem._id} key={elem._id}>
                            {elem.category_name}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="quantity">Product in Stock </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={fData.product_quantity}
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_quantity: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  type="number"
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  id="quantity"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="offer">Product Offfer (%) </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={fData.product_offer}
                  onKeyDown={(e) => validateNumericInput(e)}
                  type="number"
                  onChange={(e) =>
                    setFdata({
                      ...fData,
                      error: false,
                      success: false,
                      product_offer: e.target.value,
                    })
                  }
                  className="px-4 py-2 border  h-14 rounded-lg focus:outline-none"
                  id="offer"
                />
              </div>
            </div>
            <div className="flex flex-row space-y-1 w-full pb-4 md:pb-6 mt-4 justify-end">
              {/* button needs to be replaced */}
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                style={{
                  backgroundColor: '#626262',
                }}
                className="rounded-xl  w-32 text-gray-100 text-lg font-medium py-2"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProductDetail
