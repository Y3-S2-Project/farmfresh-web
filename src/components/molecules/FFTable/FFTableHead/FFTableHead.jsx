import React from 'react'

const FFTableHead = ({ columns, Button }) => {
  return (
    <thead className="rounded-md  p-5">
      <tr className="rounded-md ">
        <td>{Button}</td>
      </tr>
      <tr className="rounded-md outline outline-gray-500/50">
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="px-6 py-4 font-medium text-gray-900 text-center"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default FFTableHead
