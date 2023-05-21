import React from 'react'
import { useState } from 'react'
import FFRating from '../../components/atoms/FFRating/FFRating'
import FFReviewManageModal from '../../components/molecules/FFModal/FFReviewManageModal'
import ColouredNotepadIcon from '../../assets/icons/ColouredNotepadIcon'
import FFConfirmationModal from '../../components/molecules/FFModal/FFConfirmationModal'
import ColouredWarningIcon from '../../assets/icons/ColouredWarningIcon'
const Index = () => {
  const [value, setValue] = useState(0)
  console.log('coloredNotepadIcon', ColouredNotepadIcon)
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFRating
        value={value}
        size={'3rem'}
        handleRatingChange={(e) => setValue(Number(e.target.value))}
      />
      <FFReviewManageModal
        title={'Write a Review'}
        subTitle={'Share your thoughts about this product'}
        topLeftIcon={<ColouredNotepadIcon />}
        firstLabelName={'Review'}
      />
    </>
  )
}

export default Index
