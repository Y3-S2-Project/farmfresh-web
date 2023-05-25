import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  message,
  selectAllProducts,
  isLoading,
  isSuccess,
  isError,
} from '../../redux/features/productSlice'
import { getAllProducts } from '../../redux/features/productSlice'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import FFAlertModal from '../../components/organisms/FFAlertModal'
import FFProductTableData from '../../components/atoms/FFProductTableData/FFProductTableData'
import { PRODUCT_TABLE_HEADER_CONTENT } from '../../utils/constants'
import { LoadingIcon } from '../../assets/icons/LoadingIcon'
import { FFViewProductModal } from '../../components/organisms/FFViewProductModal'
const AdminProductPage = () => {
  const dispatch = useDispatch()

  const productList = useSelector(selectAllProducts)
  const responseMessage = useSelector(message)
  const loadingStatus = useSelector(isLoading)
  const errorStatus = useSelector(isError)
  const successStatus = useSelector(isSuccess)

  useEffect(() => {
    if (responseMessage !== 'All products') {
      setTimeout(() => {
        dispatch(getAllProducts())
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
        <FFTableHead columns={PRODUCT_TABLE_HEADER_CONTENT} />
        <FFTableBody rows={productList} SingleItem={FFProductTableData} />
      </FFTable>
    )
  } else if (errorStatus) {
    content = <p>{responseMessage}</p>
  }

  return (
    <div>
      <FFAlertModal />
      <FFViewProductModal />
      {content}
    </div>
  )
}

export default AdminProductPage
