import React from 'react'
import FFButton from '../../components/atoms/FFButton'
import ClappingIcon from '../../assets/icons/ClappingIcon'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFSingleCartItem from '../../components/atoms/FFSingleCartItem/FFSingleCartItem'
import FFTableHead from '../../components/atoms/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTableBody/FFTableBody'
import productImage from '../../assets/cart/Ellipse 6.png'

const Index = () => {
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFButton
        name="Helpful"
        variant="outlined"
        color="success"
        startIcon={<ClappingIcon />}
        buttonStyles={{ width: '100px', borderRadius: '12px', height: '40px' }}
        handleClick={() => console.log('clicked')}
      />
      {/* header */}
      {/* <Paper className="shadow-sm rounded-xl xl:py-3 xl:px-20 mx-16 mt-2"></Paper> */}
      {/* single row */}
      <div className="m-4">
        <FFTable>
          <FFTableHead
            columns={['Product', 'Price', 'Quantity', 'Total', 'Action']}
          />
          <FFTableBody rows={ROWS} SingleItem={FFSingleCartItem} />
        </FFTable>
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
]

export default Index
