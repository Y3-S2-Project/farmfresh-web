import React from 'react'
import { useState } from 'react'
import FFModal from '../../components/molecules/FFModal/FFConfirmationModal'
import ColouredWarningIcon from '../../assets/icons/ColouredWarningIcon'
import FFRating from '../../components/atoms/FFRating/FFRating'

const Index = () => {
  const [rating, setRating] = useState(0)
  const handleRatingChange = (value) => {
    setRating(value)
  }
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFModal
        title="Confirm Deletion"
        topLeftIcon={<ColouredWarningIcon />}
        message={`Are you sure you want to delete this review? You won't be able to revoke this decision.`}
        cancellable={true}
      />
      <FFRating value={rating} handleRatingChange={handleRatingChange} />
    </>
  )
}

export default Index
