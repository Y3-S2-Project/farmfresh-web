import React, { useState, useEffect } from 'react'
import { selectProduct } from '../../redux/features/productSlice'
import { getNutritions } from '../../services/product'

import { useDispatch, useSelector } from 'react-redux'

import { FFSingleProduct } from '../../components/molecules/FFSingleProduct/FFSingleProduct'

export const ViewProductPage = () => {
  const dispatch = useDispatch()
  const [nutritrients, setNutrients] = useState()
  const product = useSelector(selectProduct)
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
    <div className="mt-4 md:mt-0 relative bg-blue w-8/12 md:w-3/6 flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
      <FFSingleProduct product={product} nutritrients={nutritrients} />
    </div>
  )
}
