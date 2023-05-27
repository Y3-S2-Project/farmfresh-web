import React from 'react'
import { FFPill } from '../FFPill/FFPill'
import {
  BinIcon,
  CrossIcon,
  CheckIcon,
  VisionIcon,
  EditIcon,
} from '../../../assets/icons'
import {
  editProductModalOpen,
  viewProductModalOpen,
} from '../../../redux/features/productSlice'
import { alertModalOpen } from '../../../redux/features/alertSlice'
import { useDispatch } from 'react-redux'

const FFProductTableData = ({ row }) => {
  const dispatch = useDispatch()
  return (
    <>
      {' '}
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.product_id.slice(0, 7)}...
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.product_name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 items-center justify-center">
          <FFPill type={row.product_status} />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.product_offer}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3 text-gray-900 items-center justify-center">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full object-cover object-center"
              src={row.product_images[0]}
              alt={row.product_name}
            />
          </div>
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full object-cover object-center"
              src={row.product_images[1]}
              alt={row.product_name}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.product_visible ? (
              <FFPill type="accepted" />
            ) : (
              <FFPill type="rejected" />
            )}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.updatedAt}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        {localStorage.getItem('userRole') === 'admin' ? (
          <div className="flex justify-center items-center gap-4">
            <VisionIcon
              handleClick={() => {
                dispatch(viewProductModalOpen({ product: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
            <CrossIcon
              handleClick={() => {
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'product-reject',
                    title: 'Reject  Product',
                    body: 'Due to innapporiate image usage , this product cannot be added, please be kind to  change the images and request for approval',
                    product_id: row.product_id,
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
            />
            <CheckIcon
              handleClick={() => {
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'product-accept',
                    title: 'Accept  Product',
                    body: 'Your Product has been added to the system. it will be visible to users.',
                    product_id: row.product_id,
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <BinIcon
              handleClick={() => {
                console.log('mee the devil')
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'product-delete',
                    title: 'Confirm Product Removal',
                    body: 'Are you sure you want to delete this product? This action cannot be undone?',
                    product_id: row.product_id,
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
              strokeColor="#f00"
            />
            <EditIcon
              handleClick={() => {
                console.log('Clicked')
                dispatch(editProductModalOpen({ product: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
            <VisionIcon
              handleClick={() => {
                console.log('Clicked')
                dispatch(viewProductModalOpen({ product: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
      </td>
    </>
  )
}

export default FFProductTableData
