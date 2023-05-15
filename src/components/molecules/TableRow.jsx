import React from 'react';
import { TableCell } from '../atoms';
import { Actions } from './Actions';
import { AdminProductDeleteButton, AdminProductEditButton, AdminProductViewButton } from '../atoms';

const TableRow = ({ row }) => {
  let cells = [];

  if (Array.isArray(row)) {
    // If row is an array, iterate over its elements
    cells = row.map((data, index) => (
      <TableCell key={index} data={data} index={index} />
    ));
  } else if (typeof row === 'object') {
    // If row is an object, iterate over its values
    cells = Object.values(row).map((data, index) => (
      <TableCell key={index} data={data} index={index} />
    ));
  }

  return (
    <tr className='flex flex-row items-start gap-8  w-1047 h-70'>
      {cells}
      <td>
        <Actions
          update={AdminProductEditButton}
          remove={AdminProductDeleteButton}
          view={AdminProductViewButton}
        />
      </td>
    </tr>
  );
};

export default TableRow;
