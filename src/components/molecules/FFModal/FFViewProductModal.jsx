import React, { useEffect, useState } from 'react'
import {
  view_product_modal,
  viewProductModalOpen,
} from '../../redux/features/productSlice'
import { getNutritions } from '../../services/product'
import FFImageSlider from '../atoms/FFImageSlider/FFImageSlider'
import { useDispatch, useSelector } from 'react-redux'
import { FFSingleProduct } from '../molecules/FFSingleProduct/FFSingleProduct'
export const FFViewProductModal = () => {
  const dispatch = useDispatch()
  const view_product_detail_modal = useSelector(view_product_modal)
  const [nutritrients, setNutrients] = useState()

  const fetNutrients = async () => {
    try {
      const data = await getNutritions(view_product_detail_modal.product_name)
      setNutrients(data)
      console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetNutrients()
  }, [view_product_detail_modal, dispatch])
  return (
    <>
      {' '}
      <div
        onClick={(e) => dispatch(viewProductModalOpen({ open: false }))}
        className={`${
          view_product_detail_modal.modal ? '' : 'hidden'
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}
      {/* Modal Start */}
      <div
        className={`${
          view_product_detail_modal.modal ? '' : 'hidden'
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-4 md:mt-0 relative bg-white w-8/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8 rounded-xl">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="flex items-center justify-center text-center font-semibold text-2xl tracking-wider">
              <div className="mx-auto">View Product</div>
            </span>

            {/* Close Modal */}
            <span
              style={{ background: '#626262' }}
              onClick={(e) => dispatch(viewProductModalOpen({ open: false }))}
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
          <FFSingleProduct
            product={view_product_detail_modal}
            nutritrients={nutritrients}
          />
        </div>
      </div>
    </>
  )
}
