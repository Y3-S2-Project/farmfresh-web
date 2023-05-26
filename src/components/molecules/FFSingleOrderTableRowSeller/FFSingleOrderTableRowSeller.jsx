import React from 'react'
import CancelIcon from '../../../assets/icons/CancelIcon'
import TickIcon from '../../../assets/icons/TickIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import FFStatusPill from '../../atoms/FFStatusPill/FFStatusPill'
import FFStatusBadge from '../../atoms/FFStatusBadge/FFStatusBadge'

const FFSingleOrderTableRowSeller = ({row}) => {
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
            {row.product_name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.availability==='in stock' ? (
                <FFStatusBadge type="in stock" />
            ): row.availability==='out of stock' ? (
                <FFStatusBadge type="out of stock" />
            ): null}
          </span>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.created_at}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">
            {row.status === 'Confirmed' ? (
              <FFStatusPill type="Confirmed" />
            ) : row.status === 'Cancelled' ? (
              <FFStatusPill type="Cancelled" />
            ) : null}
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

export default FFSingleOrderTableRowSeller
