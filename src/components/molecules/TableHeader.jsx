import React from 'react'
import { TableHeaderCell } from '../atoms'



const TableHeader = ({ tableHeaderContent}) => {
  return (
    
<thead className="p-4 gap-8 absolute w-1047 h-70 left-329 top-285 bg-white border-2 border-gray-700 shadow-md rounded-lg">
      <tr className="flex flex-row items-start gap-8">
        {tableHeaderContent?.map((item, index) =>

          <TableHeaderCell item={ item} key={ index} />
        
         )}
  
   
  </tr>
</thead>



  )
}
export default TableHeader