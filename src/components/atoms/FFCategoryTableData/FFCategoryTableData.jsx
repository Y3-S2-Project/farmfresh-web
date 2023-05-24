import React from 'react'
import { Pill } from '../Pill'
import { BinIcon, VisionIcon, EditIcon } from '../../../assets/icons'
import { editCategoryModalOpen } from '../../../redux/features/categorySlice'
import { alertModalOpen } from '../../../redux/features/alertSlice'
import { useDispatch } from 'react-redux'

const FFCategoryTableData = ({ row }) => {
  const dispatch = useDispatch()
  return (
    <>
      {' '}
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.category_name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.category_id.slice(0, 7)}...
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3 text-gray-900 items-center justify-center">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full object-cover object-center"
              src={row.category_image}
              alt={row.category_name}
            />
          </div>
          {/* <div className="relative h-10 w-10">
            <img
              className="h-full w-full object-cover object-center"
              src={row.category_images[1]}
              alt={row.category_name}
            />
          </div> */}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 items-center justify-center">
          <Pill type={row.category_status} />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.category_description.slice(0, 5)}...
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
                  }),
                )
              }}
              style={{ cursor: 'pointer' }}
              strokeColor="#f00"
            />
            <EditIcon
              handleClick={() => {
                console.log('Clicked')
                dispatch(editCategoryModalOpen({ category: row, open: true }))
              }}
              style={{ cursor: 'pointer' }}
            />
            <VisionIcon style={{ cursor: 'pointer' }} />
          </div>
        }
      </td>
    </>
  )
}

export default FFCategoryTableData
