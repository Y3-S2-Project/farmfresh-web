import React from 'react'
import { useState } from 'react'
import FFModal from '../../components/molecules/FFModal/FFConfirmationModal'
import ColouredWarningIcon from '../../assets/icons/ColouredWarningIcon'
import FFRating from '../../components/atoms/FFRating/FFRating'

const Index = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFRating
        value={value}
        handleRatingChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  )
}

export default Index
