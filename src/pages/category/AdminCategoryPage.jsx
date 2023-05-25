import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  message,
  selectAllCategories,
  isLoading,
  isSuccess,
  isError,
  getAllCategories,
  addCategoryModal,
} from '../../redux/features/categorySlice'

import { LoadingIcon } from '../../assets/icons/LoadingIcon'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFButton from '../../components/atoms/FFButton/FFButton'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import AlertModal from '../../components/organisms/AlertModal'

import FFCategoryTableData from '../../components/atoms/FFCategoryTableData/FFCategoryTableData'
import { CATEGORY_TABLE_HEADER_CONTENT } from '../../utils/constants'
import AddCategoryModal from '../../components/organisms/AddCategoryModal'
import EditCategoryModal from '../../components/organisms/EditCategoryModal'
import { ViewCategoryModal } from '../../components/organisms/ViewCategoryModal'
const AdminCategoryPage = () => {
  const dispatch = useDispatch()
  const categoryList = useSelector(selectAllCategories)
  const responseMessage = useSelector(message)
  const loadingStatus = useSelector(isLoading)
  const errorStatus = useSelector(isError)
  const successStatus = useSelector(isSuccess)

  useEffect(() => {
    if (responseMessage !== 'Categories fetched successfully') {
      setTimeout(() => {
        dispatch(getAllCategories())
      }, 2000)
    }
    localStorage.setItem('userRole', 'admin')
  }, [dispatch, responseMessage])

  let content = null
  if (loadingStatus) {
    content = <LoadingIcon />
  } else if (successStatus) {
    content = (
      <FFTable>
        <FFTableHead columns={CATEGORY_TABLE_HEADER_CONTENT} />
        <FFTableBody rows={categoryList} SingleItem={FFCategoryTableData} />
      </FFTable>
    )
  } else if (errorStatus) {
    content = <p>{responseMessage}</p>
  }

  return (
    <div>
      <FFButton
        name="+ Add Category"
        variant="contained"
        handleClick={() => {
          console.log('Clicked')
          dispatch(addCategoryModal(true))
        }}
        color="primary"
        buttonStyles={{
          width: '200px',
          height: '46px',
          color: 'black',
          backgroundColor: 'white',
          margin: '2%',
          border: '2px solid black',
          opacity: '0.5',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '24px',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '16px',
          lineHeight: '1.6',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      />
      <AddCategoryModal />
      <AlertModal />
      <EditCategoryModal />
      <ViewCategoryModal />
      {content}
    </div>
  )
}

export default AdminCategoryPage
