
import React, { useEffect, useState } from 'react'

import { FFViewProducts } from '../../components/organisms/FFViewProducts/FFViewProducts'
import FFButton from '../../components/atoms/FFButton/FFButton'
import FFTable from '../../components/molecules/FFTable/FFTable'
import FFSingleCartItem from '../../components/molecules/FFSingleCartItem/FFSingleCartItem'
import FFTableHead from '../../components/molecules/FFTable/FFTableHead/FFTableHead'
import FFTableBody from '../../components/molecules/FFTable/FFTableBody/FFTableBody'
import productImage from '../../assets/cart/Ellipse 6.png'
import FFReviewManageModal from '../../components/molecules/FFModal/FFReviewManageModal'
import ColouredNotepadIcon from '../../assets/icons/ColouredNotepadIcon'
import FFChangePassword from '../../components/molecules/FFChangePassword/FFChangePassword'

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
      <FFChangePassword />

    </>
  )
}

export default Index
