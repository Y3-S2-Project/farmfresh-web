import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  edit_product_modal,
  getAllProducts,
  isSuccess,
  isError,
  editProductModalOpen,
  updateProduct,
  message,
} from '../../redux/features/productSlice'
import { selectAllCategories } from '../../redux/features/categorySlice'
import { imageUpload, removeImage } from '../../utils/imagesFunctions'
import {
  validateProductName,
  validateNumericInput,
} from '../../utils/validations/product'
const FFEditProductModal = () => {
  const dispatch = useDispatch()
  const edit_product_detail_modal = useSelector(edit_product_modal)
  const succesStatus = useSelector(isSuccess)
  const errorStatus = useSelector(isError)
  const responseMessage = useSelector(message)

  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const categories = useSelector(selectAllCategories)
  const [imageAdded, setImageAdded] = useState(false)
  //error
  const [productNameError, setProductNameError] = useState('')

  const alert = (msg, type) => (
    <div
      className={`text-${type} flex felx-row  justify-center items-center py-2 px-4 w-full`}
    >
      {msg}
    </div>
  )

  const [editformData, setEditformdata] = useState({
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

  useEffect(() => {
    setEditformdata({
      product_name: edit_product_detail_modal.product_name,
      product_price: edit_product_detail_modal.product_price,
      product_status: edit_product_detail_modal.product_status,
      product_category: edit_product_detail_modal.product_category,
      product_offer: edit_product_detail_modal.product_offer,
      product_images: edit_product_detail_modal.product_images,
      product_quantity: edit_product_detail_modal.product_quantity,
      product_visible: edit_product_detail_modal.product_visible,
      product_weight: edit_product_detail_modal.product_weight,
      product_sale_status: edit_product_detail_modal.product_sale_status,
    })
  }, [edit_product_detail_modal])

  useEffect(() => {
    setImageAdded(true)
  }, [editformData?.product_images])

  const submitForm = async (e) => {
    e.preventDefault()
    if (editformData?.product_images > 1) {
      console.log('UploaImage ')
    } else {
      console.log('Image uploading')
    }
    try {
      const { error, success, ...updatedData } = editformData
      console.log(editformData)
      dispatch(
        updateProduct({
          ...updatedData,
          product_id: edit_product_detail_modal.product_id,
        }),
      )
      if (succesStatus) {
        dispatch(getAllProducts())
        setEditformdata({ ...editformData, success: succesStatus })
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            success: succesStatus,
          })
        }, 2000)
      } else if (errorStatus) {
        setEditformdata({ ...editformData, error: errorStatus })
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            error: false,
            success: false,
          })
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
    imageUpload(selectedFile, 'productImages')
      .then((imageUrl) => {
        // push the imageUrl to the imageUrl array
        setEditformdata((prevState) => ({
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
        setEditformdata((prevState) => ({
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
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch(editProductModalOpen({ open: false }))}
        className={`${
          edit_product_detail_modal.modal ? '' : 'hidden'
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          edit_product_detail_modal.modal ? '' : 'hidden'
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-4 md:mt-0 relative bg-[#F5F3F0] w-8/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Edit Product
            </span>
            {/* Close Modal */}
            <span
              style={{ background: '#626262' }}
              onClick={(e) => dispatch(editProductModalOpen({ open: false }))}
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
          {editformData.error
            ? alert(
                responseMessage !== 'All products' ? responseMessage : '',
                'red',
              )
            : ''}
          {editformData.success
            ? alert(
                responseMessage !== 'All products' ? responseMessage : '',
                'green',
              )
            : ''}
          {productNameError ? alert(productNameError, 'red') : ''}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Product Name </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={editformData.product_name}
                  onChange={(e) => {
                    validateProductName({
                      productName: e.target.value,
                      setProductNameError,
                    })
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_name: e.target.value,
                    })
                  }}
                  className="px-4 py-2 border  h-14 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Product Price (Rs.) </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={editformData.product_price}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_price: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  type="number"
                  className="px-4 py-2 border  h-14 focus:outline-none"
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
                    {editformData?.product_images &&
                      editformData?.product_images.map((image, index) => (
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
                  value={editformData.product_weight}
                  type="number"
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_weight: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  className="px-4 py-2   h-14 border focus:outline-none"
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
                  value={editformData.product_status}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_status: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2  h-14 border focus:outline-none"
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
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_category: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border  h-14 focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories.map((elem) => {
                    return (
                      <Fragment key={elem._id}>
                        <option
                          name="status"
                          value={elem._id}
                          key={elem._id}
                          selected
                        >
                          {elem.category_name}
                        </option>
                      </Fragment>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="quantity">Product in Stock </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={editformData.product_quantity}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_quantity: e.target.value,
                    })
                  }
                  onKeyDown={(e) => validateNumericInput(e)}
                  type="number"
                  className="px-4 py-2 border  h-14 focus:outline-none"
                  id="quantity"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="offer">Product Offfer (%) </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={editformData.product_offer}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      product_offer: e.target.value,
                    })
                  }
                  type="number"
                  onKeyDown={(e) => validateNumericInput(e)}
                  className="px-4 py-2 border h-14 focus:outline-none"
                  id="offer"
                />
              </div>
            </div>
            <div className="flex flex-row space-y-1 w-full pb-4 md:pb-6 mt-4 justify-end">
              <button
                style={{ background: '#626262' }}
                type="submit"
                className="rounded-xl  w-36 text-gray-100 text-lg font-medium py-2"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FFEditProductModal
