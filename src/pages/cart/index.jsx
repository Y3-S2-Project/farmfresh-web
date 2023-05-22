import React from 'react'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFSingleCartItem from '../../components/molecules/FFSingleCartItem/FFSingleCartItem'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import productImage from '../../assets/cart/Ellipse 6.png'
import FFCartSummary from '../../components/molecules/FFSummary/FFCartSummary'

const Cart = () => {
  return (
    <>
      <h1 className="hidden">Cart</h1>
      <div className="m-4">
        <FFTable>
          <FFTableHead
            columns={['Product', 'Price', 'Quantity', 'Total', 'Action']}
          />
          <FFTableBody rows={ROWS} SingleItem={FFSingleCartItem} />
        </FFTable>
        <FFCartSummary total={560.5} discount={50} />
      </div>
    </>
  )
}

const ROWS = [
  {
    id: 1,
    name: 'Product 1',
    image: productImage,
    price: `Rs. ${(195.0).toFixed(2)}`,
    quantity: 1,
    total: `Rs. ${(97.5).toFixed(2)}`,
  },
  {
    id: 2,
    name: 'Product 2',
    image: productImage,
    price: `Rs. ${(195.0).toFixed(2)}`,
    quantity: 1,
    total: `Rs. ${(97.5).toFixed(2)}`,
  },
  {
    id: 3,
    name: 'Product 3',
    image: productImage,
    price: `Rs. ${(195.0).toFixed(2)}`,
    quantity: 1,
    total: `Rs. ${(97.5).toFixed(2)}`,
  },
]

export default Cart
