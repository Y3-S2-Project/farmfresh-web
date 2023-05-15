// TableBody.jsx
import React from 'react';
import TableRow from "./TableRow";
import TableCell from "../atoms";



const TableBody = ({ data }) => {
  return (
    <tbody className='p-4 gap-8 mt-36  w-1047 h-70  bg-white border-1 border-gray-700 shadow-md rounded-lg'>
      {data?.map((row, index) => (
        <TableRow key={index} row={ row}/>
      ))}
    </tbody>
  );
};

export default TableBody;
