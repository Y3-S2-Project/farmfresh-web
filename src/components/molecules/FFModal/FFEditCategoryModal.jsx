import React, { useState, useEffect, useRef } from 'react'
import { imageUpload, removeImage } from '../../../utils/imagesFunctions'
import { useDispatch, useSelector } from 'react-redux'
import {
  edit_category_modal,
  getAllCategories,
  isSuccess,
  isError,
  editCategoryModalOpen,
  updateCategory,
  message,
} from '../../../redux/features/categorySlice'

const FFEditCategoryModal = () => {
  const dispatch = useDispatch()
  const edit_category_detail_modal = useSelector(edit_category_modal)
  const succesStatus = useSelector(isSuccess)
  const errorStatus = useSelector(isError)
  const responseMessage = useSelector(message)
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

  const [editFormData, setEditformdata] = useState({
    _id: null,
    category_name: '',

    category_status: '',
    category_description: '',
    category_image: '',

    success: false,
    error: false,
  })
  useEffect(() => {
    setEditformdata({
      category_name: edit_category_detail_modal.category_name,

      category_status: edit_category_detail_modal.category_status,
      category_description: edit_category_detail_modal.category_description,
      category_image: edit_category_detail_modal.category_image,
    })
  }, [edit_category_detail_modal])

  useEffect(() => {
    setImageAdded(true)
    setSelectedFile(null)
  }, [editFormData?.product_image])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editFormData?.product_image) {
      console.log('UploaImage ')
    } else {
      console.log('Image uploading')
    }
    try {
      dispatch(
        updateCategory({
          category: {
            category_image: editFormData.category_image,
            category_name: editFormData.category_name,
            category_status: editFormData.category_status,
            category_description: editFormData.category_description,
          },
          category_id: edit_category_detail_modal._id,
        }),
      )

      if (succesStatus) {
        dispatch(getAllCategories())
        setEditformdata({ ...editFormData, success: succesStatus })
        setTimeout(() => {
          return setEditformdata({
            ...editFormData,
            success: succesStatus,
          })
        }, 2000)
      } else if (errorStatus) {
        setEditformdata({ ...editFormData, error: errorStatus })
        setTimeout(() => {
          return setEditformdata({
            ...editFormData,
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
    imageUpload(selectedFile, 'categoryImages')
      .then((imageUrl) => {
        // push the imageUrl to the imageUrl array
        setEditformdata((prevState) => ({
          ...prevState,
          error: false,
          success: false,
          category_image: imageUrl,
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
          category_image: '',
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
          dispatch(editCategoryModalOpen({ open: false }))
        }}
        className={`${
          edit_category_detail_modal.modal ? '' : 'hidden'
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          edit_category_detail_modal.modal ? '' : 'hidden'
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-4 md:mt-0 relative bg-[#F5F3F0] w-8/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Edit Category
            </span>
            {/* Close Modal */}
            <span
              style={{ background: '#626262' }}
              onClick={() => {
                console.log('background clicked')
                dispatch(editCategoryModalOpen({ open: false }))
              }}
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
          {errorStatus ? (
            <div className="text-red-500">
              {responseMessage !== 'Categories fetched successfully'
                ? responseMessage
                : ''}
            </div>
          ) : (
            ''
          )}
          {succesStatus ? (
            <div className="text-green-500">
              {responseMessage !== 'Categories fetched successfully'
                ? responseMessage
                : ''}
            </div>
          ) : (
            ''
          )}
          <form className="w-full">
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Category Name </label>
                <span className="text-red-600 text-xs">* Required</span>
                <input
                  value={editFormData.category_name}
                  onChange={(e) =>
                    setEditformdata({
                      ...editFormData,
                      error: false,
                      success: false,
                      category_name: e.target.value,
                    })
                  }
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  type="text"
                />
              </div>

              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Category Status </label>
                <span className="text-red-600 text-xs">* Required</span>
                <select
                  value={editFormData.category_status}
                  onChange={(e) =>
                    setEditformdata({
                      ...editFormData,
                      error: false,
                      success: false,
                      category_status: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border h-14 rounded-lg  focus:outline-none"
                  id="status"
                >
                  <option name="status" value="Available">
                    Available
                  </option>
                  <option name="status" value="Unavailable">
                    Unavailable
                  </option>
                </select>
              </div>
            </div>

            {/* Most Important part for uploading multiple image */}

            <div className="flex space-x-1 py-4">
              <div className="flex w-1/2 flex-col mt-4">
                <label htmlFor="image">Image Upload</label>
                <span className="text-red-600 text-xs">
                  * Must need 1 image
                </span>
                {imageAdded && (
                  <div className="mt-3">
                    {editFormData.category_image && (
                      <div className="relative">
                        <img
                          src={editFormData.category_image}
                          alt="Category_Image"
                          className="w-20 h-20 object-cover rounded-full mr-2 mb-2"
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700 transition-all duration-150"
                          onClick={(e) =>
                            handleImageRemove(editFormData.category_image, e)
                          }
                        >
                          &times;
                        </button>
                      </div>
                    )}
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
                          alt="Category_Image"
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
              <div className="flex w-1/2  flex-col space-y-2">
                <label htmlFor="description">Category Description</label>
                <span className="text-red-600 text-xs">* Required</span>
                <textarea
                  value={editFormData.category_description}
                  onChange={(e) =>
                    setEditformdata({
                      ...editFormData,
                      error: false,
                      success: false,
                      category_description: e.target.value,
                    })
                  }
                  className="px-4 py-2 border rounded-lg  focus:outline-none"
                  name="description"
                  id="description"
                  cols={5}
                  rows={8}
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
                className="rounded-xl  w-40 text-gray-100 text-lg font-medium py-2"
              >
                Update Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FFEditCategoryModal
