import React, { useEffect } from 'react'
const FFTableBody = ({ rows = [], SingleItem }) => {
  return (
    <tbody className="max-h-[100px] overflow-y-auto">
      {rows.map((row, index) => (
        <tr className="shadow-md rounded-md hover:cursor-pointer hover:scale-102 transition ease-in-out delay-150 duration-300">
          <SingleItem key={index} row={row} />
        </tr>
      ))}
    </tbody>
  )
}

export default FFTableBody
