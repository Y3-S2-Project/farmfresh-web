import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  message,
  selectAllProducts,
  isLoading,
  isSuccess,
  isError,
} from '../../redux/features/productSlice'
import {
  getFarmerProducts,
  addProductModal,
} from '../../redux/features/productSlice'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFButton from '../../components/atoms/FFButton/FFButton'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import FFAlertModal from '../../components/molecules/FFModal/FFAlertModal'
import FFProductTableData from '../../components/atoms/FFProductTableData/FFProductTableData'
import { PRODUCT_TABLE_HEADER_CONTENT } from '../../utils/constants'

import FFAddProductModal from '../../components/molecules/FFModal/FFAddProductModal'
import FFEditProductModal from '../../components/molecules/FFModal/FFEditProductModal'
import { LoadingIcon } from '../../assets/icons/LoadingIcon'
import { FFViewProductModal } from '../../components/molecules/FFModal/FFViewProductModal'
import { getAllCategories } from '../../redux/features/categorySlice'
import FFNavBar from '../../components/molecules/FFNavBar/FFNavBar'
import { AppBar, Container } from '@mui/material'
import { FFTitle } from '../../components/atoms/FFTitle/FFTitle'
const FarmerProductPage = () => {
  const dispatch = useDispatch()

  const productList = useSelector(selectAllProducts)
  const responseMessage = useSelector(message)
  const loadingStatus = useSelector(isLoading)
  const errorStatus = useSelector(isError)
  const successStatus = useSelector(isSuccess)

  useEffect(() => {
    if (responseMessage !== 'All famer products') {
      setTimeout(() => {
        dispatch(getFarmerProducts())
        dispatch(getAllCategories())
      }, 2000)
    }
  }, [dispatch, responseMessage])

  let content = null
  if (loadingStatus) {
    content = <LoadingIcon />
  } else if (successStatus) {
    content = (
      <FFTable>
        <FFTableHead
          Button={
            <FFButton
              name="+ Add product"
              variant="contained"
              handleClick={() => {
                dispatch(addProductModal(true))
              }}
              color="primary"
              buttonStyles={{
                width: '200px',
                height: '46px',
                color: 'black',
                backgroundColor: 'white',
                marginBottom: '20px',
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
          }
          columns={PRODUCT_TABLE_HEADER_CONTENT}
        />
        <FFTableBody rows={productList} SingleItem={FFProductTableData} />
      </FFTable>
    )
  } else if (errorStatus) {
    content = <p>{responseMessage}</p>
  }

  return (
    <div>
      <div className="">
        {' '}
        <FFNavBar />
        <FFTitle title={`Product Management`} />
        <div className="  ml-80 mr-80 "> </div>
      </div>
      <FFAlertModal />
      <FFEditProductModal />
      <FFViewProductModal />
      <FFAddProductModal /> {content}
    </div>
  )
}

export default FarmerProductPage
