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
  getAllProducts,
  addProductModal,
} from '../../redux/features/productSlice'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFButton from '../../components/atoms/FFButton/FFButton'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import AlertModal from '../../components/organisms/AlertModal'
import FFProductTableData from '../../components/atoms/FFProductTableData/FFProductTableData'
import { PRODUCT_TABLE_HEADER_CONTENT } from '../../utils/constants'

import AddProductModal from '../../components/organisms/AddProductModal'
import EditProductModal from '../../components/organisms/EditProductModal'
import { LoadingIcon } from '../../assets/icons/LoadingIcon'
const FarmerProductPage = () => {
  const dispatch = useDispatch()

  const productList = useSelector(selectAllProducts)
  const responseMessage = useSelector(message)
  const loadingStatus = useSelector(isLoading)
  const errorStatus = useSelector(isError)
  const successStatus = useSelector(isSuccess)

  useEffect(() => {
    if (responseMessage !== 'All products') {
      dispatch(getAllProducts())
    }
    localStorage.setItem('userRole', 'farmer')
  }, [dispatch, responseMessage])

  let content = null
  if (loadingStatus) {
    content = <LoadingIcon />
  } else if (successStatus) {
    content = (
      <FFTable>
        <FFTableHead columns={PRODUCT_TABLE_HEADER_CONTENT} />
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
        <FFButton
          name="+ Add product"
          variant="contained"
          handleClick={() => {
            console.log('Clicked')
            dispatch(addProductModal(true))
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
      </div>
      <AlertModal />
      <EditProductModal />
      <AddProductModal /> {content}
    </div>
  )
}

export default FarmerProductPage