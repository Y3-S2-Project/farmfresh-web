import React from 'react'
import { FFPill } from '../FFPill/FFPill'
import { BinIcon, VisionIcon, EditIcon } from '../../../assets/icons'
import {
  editCategoryModalOpen,
  removeCategory,
  viewCategoryModalOpen,
} from '../../../redux/features/categorySlice'
import { alertModalOpen } from '../../../redux/features/alertSlice'
import { useDispatch } from 'react-redux'

const FFCategoryTableData = ({ row }) => {
  const dispatch = useDispatch()
  return (
    <>
      {' '}
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span
            data-testid="category-name"
            className="w-full font-medium text-gray-700"
          >
            {row.category_name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span
            data-testid="category-id"
            className="w-full font-medium text-gray-700"
          >
            {row.category_id.slice(0, 7)}...
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3 text-gray-900 items-center justify-center">
          <div className="relative h-10 w-10">
            <img
              data-testid="category-img-url"
              className="h-full w-full object-cover object-center"
              src={row.category_image}
              alt={row.category_name}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 items-center justify-center">
          <FFPill type={row.category_status} />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span
            data-testid="category-description"
            className="w-full font-medium text-gray-700"
          >
            {row.category_description.slice(0, 5)}...
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span
            data-testid="category-updated-at"
            className="w-full font-medium text-gray-700"
          >
            {row.updatedAt}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        {
          <div className="flex justify-center items-center gap-4">
            <BinIcon
              handleClick={() => {
                dispatch(
                  alertModalOpen({
                    open: true,
                    type: 'category-delete',
                    title: 'Confirm category Removal',
                    body: 'Are you sure you want to delete this category? This action cannot be undone?',
                    category_id: row._id,
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
              strokeColor="#f00"
            />
            <EditIcon
              handleClick={() => {
                dispatch(editCategoryModalOpen({ category: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
            <VisionIcon
              handleClick={() => {
                console.log('Clicked')
                dispatch(viewCategoryModalOpen({ category: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        }
      </td>
    </>
  )
}

export default FFCategoryTableData
