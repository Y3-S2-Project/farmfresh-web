import React from 'react'
import { Pill } from '../Pill'
import {
  BinIcon,
  CrossIcon,
  CheckIcon,
  VisionIcon,
  EditIcon,
} from '../../../assets/icons'
import { alertModalOpen } from '../../../redux/features/productSlice'
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
          <Pill type={row.product_status} />
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
              <Pill type="accepted" />
            ) : (
              <Pill type="rejected" />
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
            <VisionIcon style={{ cursor: 'pointer' }} />
            <CrossIcon
              handleClick={() => {
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'product-reject',
                    title: 'Reject  Product',
                    body: 'Due to innapporiate image usage , this product cannot be added, please be kind to  change the images and request for approval',
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
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'product-delete',
                    title: 'Confirm Product Removal',
                    body: 'Are you sure you want to delete this product? This action cannot be undone?',
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
              strokeColor="#f00"
            />
            <EditIcon style={{ cursor: 'pointer' }} />
            <VisionIcon style={{ cursor: 'pointer' }} />
          </div>
        )}
      </td>
    </>
  )
}

export default FFProductTableData
