import React from 'react'
import CancelIcon from '../../../assets/icons/CancelIcon'
import TickIcon from '../../../assets/icons/TickIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import FFStatusPill from '../../atoms/FFStatusPill/FFStatusPill'

const FFSingleOrderTableRow = ({ row }) => {
  return (
    <>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.order_id}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.customer_name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.order_date}
          </span>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          {row.status === 'Pending' ? (
            <FFStatusPill type="Pending" />
          ) : row.status === 'Confirmed' ? (
            <FFStatusPill type="Confirmed" />
          ) : row.status === 'Cancelled' ? (
            <FFStatusPill type="Cancelled" />
          ) : null}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.total_amount}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center gap-4">
          <TickIcon />
          <CancelIcon />
          <EyeIcon />
        </div>
      </td>
    </>
  )
}

export default FFSingleOrderTableRow
