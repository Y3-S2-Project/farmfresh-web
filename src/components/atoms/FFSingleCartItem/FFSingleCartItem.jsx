import React from 'react'
import FFCounter from '../FFCounter/FFCounter'
import BinIcon from '../../../assets/icons/BinIcon'

const SingleCartItem = ({ row }) => {
  const [value, setValue] = React.useState(1)
  return (
    <>
      <td className="px-6 py-4">
        <div className="flex gap-3 text-gray-900 items-center justify-center">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={row.image}
              alt={row.name}
            />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{row.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">{row.price}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 items-center justify-center">
          <FFCounter value={value} onChange={setValue} />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex text-gray-900 text-center text-sm">
          <span className="w-full font-medium text-gray-700">{row.total}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center gap-4">
          <BinIcon strokeColor="#f00" />
        </div>
      </td>
    </>
  )
}

export default SingleCartItem
