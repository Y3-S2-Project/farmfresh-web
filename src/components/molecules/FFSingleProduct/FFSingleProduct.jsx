import React from 'react'
import FFImageSlider from '../../atoms/FFImageSlider/FFImageSlider'
import { LocationIcon } from '../../../assets/icons/LocationIcon'
import { mapModalOpen } from '../../../redux/features/mapSlice'
import { useDispatch } from 'react-redux'
import { FFMapModal } from '../FFModal/FFMapModal'
export const FFSingleProduct = ({ product, nutritrients }) => {
  const dispatch = useDispatch()
  return (
    <div className="w-full">
      <div className="flex  flex-row  ">
        <div className="w-4/6 flex flex-col space-y-1 ">
          <FFImageSlider images={product.product_images} />
        </div>

        <div className="w-2/6 flex font-poppins flex-col space-y-2 ">
          {' '}
          <div className="w-full flex  text-[#DEB225] flex-row items-center">
            <div className="flex  ">
              {' '}
              {`Visit the ${product.product_name} Farmer`}
            </div>
          </div>
          <div className="w-full flex   flex-row items-center">
            <div className="font-semibold  text-2xl">
              {' '}
              {product.product_name}
            </div>
            <div className="flex  ml-1">
              <LocationIcon
                handleClick={() => dispatch(mapModalOpen({ open: true }))}
              />
            </div>
          </div>
          <div className="w-full flex  flex-row items-center">
            <div className="font-semibold text-l">Ratings:</div>
            <div className="flex  text-[#31A409] ml-1">
              {' '}
              {product.product_status}
            </div>
          </div>
          <div className="w-full flex  flex-row items-center">
            <div className="font-semibold text-sm">Price:</div>
            <div className="flex mt-1 text-[#31A409] ml-1">
              LKR : {product.product_price}
            </div>
          </div>
          <div className="w-full  flex-col space-y-1 space-x-1">
            <div
              className="px-4 py-2    border rounded-lg bg-[#F4F4F5] focus:outline-none"
              style={{
                whiteSpace: 'pre-wrap',
                width: '31ch',
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
      <FFMapModal />
    </div>
  )
}
