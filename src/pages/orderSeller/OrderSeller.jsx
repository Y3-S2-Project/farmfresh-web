import React from 'react'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import FFSingleOrderTableRowSeller from '../../components/molecules/FFSingleOrderTableRowSeller/FFSingleOrderTableRowSeller'

const OrderSeller = () => {
    const rows = [
      {
        order_id: 'OID001',
        product_name: 'Corn',
        availability: 'in stock',
        created_at: '2023-10-03',
        status: 'Confirmed',
      },
      {
        order_id: 'OID002',
        product_name: 'Corn',
        availability: 'out of stock',
        created_at: '2023-10-03',
        status: 'Cancelled',
      },
      {
        order_id: 'OID003',
        product_name: 'Corn',
        availability: 'in stock',
        created_at: '2023-10-03',
        status: 'Confirmed',
      },
    ]
  return (
    <div>
      <FFTable>
        <FFTableHead
          columns={[
            'Order ID',
            'Product',
            'Availability',
            'Created At',
            'Status',
            'Actions',
          ]}
        />
        <FFTableBody rows={rows} SingleItem={FFSingleOrderTableRowSeller} />
      </FFTable>
    </div>
  )
}

export default OrderSeller
