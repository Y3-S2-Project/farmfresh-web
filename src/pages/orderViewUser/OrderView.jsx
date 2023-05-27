import React from 'react'
import FFOderCard from '../../components/atoms/FFOderCard/FFOderCard'
import FFStatusPill from '../../components/atoms/FFStatusPill/FFStatusPill'
import InfoIcon from '../../assets/icons/InfoIcon'

const OrderView = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl">My Orders</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-1">
        <div className=" p-4">
          <FFOderCard
            svg={'../../assets/order/Ellipse 6.png'}
            name={'Broccali'}
            price={'2500'}
            badge={<FFStatusPill type={'Pending'} />}
            info={<InfoIcon />}
            quantity={'2'}
          />
        </div>
        <div className=" p-4">
          <FFOderCard
            svg={'../../assets/order/Ellipse 6.png'}
            name={'Broccali'}
            price={'2500'}
            badge={<FFStatusPill type={'Pending'} />}
            info={<InfoIcon />}
            quantity={'2'}
          />
        </div>
        <div className=" p-4">
          <FFOderCard
            svg={'../../assets/order/Ellipse 6.png'}
            name={'Broccali'}
            price={'2500'}
            badge={<FFStatusPill type={'Pending'} />}
            info={<InfoIcon />}
            quantity={'2'}
          />
        </div>
        <div className=" p-4">
          <FFOderCard
            svg={'../../assets/order/Ellipse 6.png'}
            name={'Broccali'}
            price={'2500'}
            badge={<FFStatusPill type={'Cancelled'} />}
            info={<InfoIcon />}
            quantity={'2'}
          />
        </div>
        <div className=" p-4">
          <FFOderCard
            svg={'../../assets/order/Ellipse 6.png'}
            name={'Broccali'}
            price={'2500'}
            badge={<FFStatusPill type={'Confirmed'} />}
            info={<InfoIcon />}
            quantity={'2'}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderView
