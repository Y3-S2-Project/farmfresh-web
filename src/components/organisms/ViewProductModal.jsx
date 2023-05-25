import React, { useEffect, useState } from 'react'
import {
  view_product_modal,
  viewProductModalOpen,
} from '../../redux/features/productSlice'
import { getNutritions } from '../../services/product'
import FFImageSlider from '../atoms/FFImageSlider/FFImageSlider'
import { useDispatch, useSelector } from 'react-redux'
export const ViewProductModal = () => {
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
          <div className="w-full">
            <div className="flex  flex-row space-x-1 py-4">
              <div className="w-4/6 flex flex-col space-y-1 space-x-1">
                <FFImageSlider
                  images={view_product_detail_modal.product_images}
                />
              </div>

              <div className="w-2/6 flex font-poppins flex-col space-y-2 ">
                {' '}
                <div className="w-full flex  text-[#DEB225] flex-row items-center">
                  <div className="flex  ">
                    {' '}
                    {`Visit the ${view_product_detail_modal.product_name} Farmer`}
                  </div>
                </div>
                <div className="w-full flex   flex-row items-center">
                  <div className="font-semibold  text-2xl">
                    {' '}
                    {view_product_detail_modal.product_name}
                  </div>
                  <div className="flex  ml-1">
                    {/* {view_product_detail_modal.product_name} */}
                  </div>
                </div>
                <div className="w-full flex  flex-row items-center">
                  <div className="font-semibold text-l">Ratings:</div>
                  <div className="flex  text-[#31A409] ml-1">
                    {' '}
                    {view_product_detail_modal.product_status}
                  </div>
                </div>
                <div className="w-full flex  flex-row items-center">
                  <div className="font-semibold text-sm">Price:</div>
                  <div className="flex mt-1 text-[#31A409] ml-1">
                    LKR : {view_product_detail_modal.product_price}
                  </div>
                </div>
                <div className="w-full  flex-col space-y-1 space-x-1">
                  <div
                    className="px-4 py-2    border rounded-lg bg-[#F4F4F5] focus:outline-none"
                    style={{
                      whiteSpace: 'pre-wrap',
                      width: '36ch',
                      minHeight: '14em',
                    }}
                  >
                    <div className="font-semibold text-l">Nutrition Facts:</div>
                    <div className="flex flex-row space-x-1">
                      <div className="flex flex-row space-x-1">
                        <small>
                          {' '}
                          {nutritrients?.totalNutrientsKCal?.ENERC_KCAL.label}
                        </small>
                        <small>sdfdf</small>
                      </div>
                      <div className="flex flex-row space-x-1">
                        {' '}
                        <small>
                          {' '}
                          {nutritrients?.totalNutrientsKCal?.ENERC_KCAL.label}
                        </small>
                        <small>sdfdf</small>
                      </div>
                      <div className="flex flex-row space-x-1">
                        {' '}
                        <small>
                          {' '}
                          {nutritrients?.totalNutrientsKCal?.ENERC_KCAL.label}
                        </small>
                        <small>sdfdf</small>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      {' '}
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
