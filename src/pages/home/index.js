import React, { useEffect, useState } from 'react'

import { getAllProducts } from '../../redux/features/productSlice'
import { FFViewProducts } from '../../components/organisms/FFViewProducts/FFViewProducts'
const Index = () => {
  return (
    <>
      <h1 className="hidden">Home</h1>
      {/* header */}
      {/* <Paper className="shadow-sm rounded-xl xl:py-3 xl:px-20 mx-16 mt-2"></Paper> */}
      {/* single row */}
      {/* <FFButton color="primary" name="Check" />
      <div className="m-4">
        <FFTable>
          <FFTableHead
            columns={['Product', 'Price', 'Quantity', 'Total', 'Action']}
          />
          <FFTableBody rows={ROWS} SingleItem={FFSingleCartItem} />
        </FFTable>
      </div> */}
      {/* <FFReviewManageModal
        title={'Write a Review'}
        subTitle={'Share your thoughts about this product'}
        topLeftIcon={<ColouredNotepadIcon />}
      /> */}
      <FFViewProducts />
    </>
  )
}

export default Index
