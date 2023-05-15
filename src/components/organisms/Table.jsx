import React from 'react';
import { TableHeader, TableBody } from '../molecules';
import { TABLE_HEADER_CONTENT } from "../../util/constant";
import { ADMIN_PRODUCT_TABLE_DATA } from '../../util/constant';
import { Actions } from '../molecules/Actions';
import { AdminProductDeleteButton, AdminProductEditButton, AdminProductViewButton } from '../atoms';

export const Table = () => {
  return (
    <table className='w-1113'>
      <thead className="bg-white border-2 border-gray-700 shadow-md rounded-lg" style={{ width: '1113px', height: '70px', marginBottom: '10px' }}>
        <tr className="flex flex-row items-start gap-8" style={{ width: '1113px', height: '70px' }}>
          {TABLE_HEADER_CONTENT?.map((item, index) => (
            <th key={index} style={{ width: '1047px', height: '70px', padding: "20px" }}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className='p-4 gap-8 mt-4 bg-white border-1 border-gray-700 shadow-md rounded-lg'>
        {ADMIN_PRODUCT_TABLE_DATA?.map((row, index) => {
          let cells = [];

          // If row is an object, iterate over its values
          cells = Object.values(row).map((data, cellIndex) => {
            if (Array.isArray(data) && data.every(item => typeof item === 'string' && item.startsWith('https'))) {
              return (
                <td key={cellIndex} style={{ padding: "10px" }}>
                  <div className='flex '>
                    {data.map((item, index) => (
                      <img key={index} src={item} alt="im" height="10px" style={{ width: '55px', height: '55px' }} />
                    ))}
                  </div>
                </td>
              );
            }

            return <td key={cellIndex} style={{ padding: "10px" }}>{data}</td>;
          });

          return (
            <tr key={index} className='flex flex-row items-start gap-8'>
              {cells}
              <td style={{width: '55px', height: '55px', padding: "20px" }}>
                <Actions
                  update={AdminProductEditButton}
                  remove={AdminProductDeleteButton}
                  view={AdminProductViewButton}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
