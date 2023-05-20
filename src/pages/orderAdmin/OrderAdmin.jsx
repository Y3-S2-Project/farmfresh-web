import React from 'react'
import FFAdminOrderCard from '../../components/atoms/FFAdminOrderCard'
import FFStatusBadges from '../../components/atoms/FFStatusBadges'

const OrderAdmin = () => {
  return (
    <div>
      <FFAdminOrderCard
        svg="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
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
