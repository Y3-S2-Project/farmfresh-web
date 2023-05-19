import React from 'react'
import { CustomActionIcon } from '../atoms'

import { ADMIN_PRODUCT_TABLE_DATA } from '../../util/constant'
import { Actions } from '../molecules/Actions'
import { TABLE_HEADER_CONTENT } from '../../util/constant'
import { Pill } from '../atoms/Pill'
import { useSelector } from 'react-redux'
export const Table = () => {
  const productList = useSelector((state) => state.products.products)
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
          {TABLE_HEADER_CONTENT?.map((item, index) => (
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
          cells = Object.values(row).map((data, cellIndex) => {
            if (
              Array.isArray(data) &&
              data.every(
                (item) => typeof item === 'string' && item.startsWith('https')
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
                  paddingLeft: '30px'
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
                  <CustomActionIcon actionType="farmer-remove" />
                  <CustomActionIcon actionType="farmer-edit" />
                  <CustomActionIcon actionType="farmer-view" />
                </Actions>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
