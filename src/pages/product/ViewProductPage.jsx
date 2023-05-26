import React, { useState, useEffect } from 'react'
import {
  selectProduct,
  message,
  isLoading,
  isError,
  isSuccess,
  getProduct,
  getAllProducts,
} from '../../redux/features/productSlice'
import { getNutritions } from '../../services/product'

import { useDispatch, useSelector } from 'react-redux'

import { FFSingleProduct } from '../../components/molecules/FFSingleProduct/FFSingleProduct'
import { LoadingIcon } from '../../assets/icons/LoadingIcon'
import { useParams } from 'react-router'
export const ViewProductPage = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const [nutritrients, setNutrients] = useState()
  const product = useSelector(selectProduct)
  const responseMessage = useSelector(message)
  const loadingStatus = useSelector(isLoading)
  const errorStatus = useSelector(isError)
  const successStatus = useSelector(isSuccess)

  useEffect(() => {
    // dispatch(getAllProducts())
    dispatch(getProduct(params.product_id))

    // localStorage.setItem('userRole', 'admin')
  }, [])

  let content = null
  if (loadingStatus) {
    content = <LoadingIcon />
  } else if (successStatus) {
    content = <FFSingleProduct product={product} nutritrients={nutritrients} />
  } else if (errorStatus) {
    content = <p>{responseMessage}</p>
  }

  const fetNutrients = async () => {
    try {
      const data = await getNutritions(product.product_name)
      setNutrients(data)
      console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetNutrients()
  }, [product, dispatch])
  return (
    <div className="mt-4 md:mt-0 relative w-8/12 md:w-3/6 flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
      {content}
    </div>
  )
}
