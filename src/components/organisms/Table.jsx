import React from 'react'

import { VisionIcon, CrossIcon, CheckIcon } from '../../assets/icons'

import { Actions } from '../molecules/Actions'

import { Pill } from '../atoms/Pill'

export const Table = ({ productList, headers }) => {
  return (
    <table className="w-1113">
      <thead
        className="bg-white border-2 border-gray-700 shadow-md "
        style={{ width: '1113px', height: '70px', marginBottom: '10px' }}
      >
        <tr
          className="flex justify-center items-center "
          style={{ width: '1113px', height: '65px' }}
        >
          {headers?.map((item, index) => (
            <th
              key={index}
              className="flex justify-center items-center"
              style={{ width: '1047px', height: '70px' }}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="p-4  mt-4 bg-white border-1 border-[#1F4647] shadow-md rounded-lg">
        {productList?.map((row, index) => {
          let cells = []

          cells = Object.entries(row).map(([key, data], cellIndex) => {
            if (
              key === 'product_price' ||
              key === '_id' ||
              key === 'product_sale_status' ||
              key === 'product_category' ||
              key === 'farmer' ||
              key === 'product_quantity' ||
              key === 'createdAt' ||
              key === 'product_weight'
            ) {
              return null // Skip the key-value pair
            }

            if (
              Array.isArray(data) &&
              data.every(
                (item) => typeof item === 'string' && item.startsWith('https'),
              )
            ) {
              return (
                <td
                  key={cellIndex}
                  style={{ width: '1047px', height: '70px', padding: '10px' }}
                >
                  <div className="flex">
                    {data.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        alt="im"
                        style={{ width: '55px', height: '55px' }}
                      />
                    ))}
                  </div>
                </td>
              )
            }

            return (
              <td
                key={cellIndex}
                className="flex justify-center items-center"
                style={{
                  width: '1047px',
                  height: '70px',
                  padding: '20px',
                  paddingLeft: '30px',
                }}
              >
                <Pill type={data} />
              </td>
            )
          })

          return (
            <tr
              key={index}
              className="flex flex-row items-start gap-3"
              style={{ width: '1113px', height: '70px' }}
            >
              {cells}
              <td style={{ width: '1047px', height: '70px', padding: '20px' }}>
                <Actions>
                  <CheckIcon />
                  <CrossIcon />
                  <VisionIcon />
                </Actions>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
