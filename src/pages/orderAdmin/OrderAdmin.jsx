import React from 'react'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import FFOderCard from '../../components/atoms/FFOderCard/FFOderCard'
import FFStatusBadge from '../../components/atoms/FFStatusBadge/FFStatusBadge'
import FFSingleOrderTableRow from '../../components/molecules/FFSingleOrderTableRow/FFSingleOrderTableRow'
import InfoIcon from '../../assets/icons/InfoIcon'

const OrderAdmin = () => {
  const rows = [
    { order_id: 'OID001', customer_name: 'Prathibha', order_date: '20223-10-03', status: 'Pending', total_amount: '2500'},
    { order_id: 'OID002', customer_name: 'Prathibha', order_date: '20223-10-03', status: 'Cancelled', total_amount: '2500'},
    { order_id: 'OID003', customer_name: 'Prathibha', order_date: '20223-10-03', status: 'Confirmed', total_amount: '2500'},
  ]
  return (
    <div>
      <div>
        <FFTable>
          <FFTableHead
            columns={[
              'Order ID',
              'Customer Name',
              'Order Date',
              'Status',
              'Total Amount',
              'Action',
            ]}
          />
          <FFTableBody rows={rows} SingleItem={FFSingleOrderTableRow} />
        </FFTable>
      </div>
      {/* <div>
        <FFOderCard
          svg={'../../assets/order/Ellipse 6.png'}
          name={'Broccali'}
          price={'2500'}
          badge={<FFStatusBadge label={'pending'} />}
          info={<InfoIcon />}
          quantity={'2'}
        />
      </div> */}
    </div>
  )
}

export default OrderAdmin
