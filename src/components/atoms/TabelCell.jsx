import React from 'react';

const TableCell = ({ data }) => {
  if (Array.isArray(data) && data.every(item => typeof item === 'string' && item.startsWith('https'))) {
    return (
      <td className='h-1/12 w-1/6'>
        <div className='flex'>    {data.map((item, index) => (
          <img key={index} src={item} alt="im"  height="10px"/>
        ))}
        </div>
    
      </td>
    );
  }

  return <td>{data}</td>;
};

export default TableCell;
