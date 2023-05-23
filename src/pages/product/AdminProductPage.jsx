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
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableHead from '../../components/atoms/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTableBody/FFTableBody'
import AlertModal from '../../components/organisms/AlertModal'
import FFProductTableData from '../../components/atoms/FFProductTableData/FFProductTableData'
import { TABLE_HEADER_CONTENT } from '../../util/constant'
import FFButton from '../../components/atoms/FFButton'
import AddProductDetail from '../../components/organisms/AddProductModal'

const AdminProductPage = () => {
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
    content = <p>"Loading..."</p>
  } else if (successStatus) {
    content = (
      <FFTable>
        <FFTableHead columns={TABLE_HEADER_CONTENT} />
        <FFTableBody rows={productList} SingleItem={FFProductTableData} />
      </FFTable>
    )
  } else if (errorStatus) {
    content = <p>{responseMessage}</p>
  }

  return (
    <div>
      <FFButton
        name="+ Add product"
        variant="contained"
        handleClick={() => {
          console.log('Clicked')
          dispatch(addProductModal(true))
        }}
        color="primary"
        buttonStyles={{
          width: '144px',
          height: '46px',
          color: 'black',
          backgroundColor: 'white',
          margin: '5px',
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
      <AlertModal />
      <AddProductDetail /> {content}
    </div>
  )
}

export default AdminProductPage
