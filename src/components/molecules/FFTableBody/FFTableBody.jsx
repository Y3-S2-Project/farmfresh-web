import React from 'react'

const FFTableBody = ({ rows = [], SingleItem }) => {
  return (
    <tbody className="">
      {Array(10).fill(
        <tr className="shadow-md rounded-md hover:cursor-pointer hover:scale-102 transition ease-in-out delay-150 duration-300">
          {rows.map((row, index) => (
            <SingleItem key={index} row={row} />
          ))}
        </tr>,
      )}
    </tbody>
  )
}

export default FFTableBody
