import React from 'react'
import FFAdminOrderCard from '../../components/atoms/FFAdminOrderCard'
import FFStatusBadges from '../../components/atoms/FFStatusBadges'
import PendingOrderIcon from '../../assets/icons/PendingOrderIcon'

const OrderAdmin = () => {
  return (
    <div>
      <FFAdminOrderCard
        svg={<PendingOrderIcon />}
        name="Total Orders"
        value="100"
      />
      <FFStatusBadges
        label="primary"
        backgroundColor="red"
        color="black"
        borderRadius="50px"
      />
    </div>
  )
}

export default OrderAdmin
