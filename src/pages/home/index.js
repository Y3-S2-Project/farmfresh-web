import React from 'react'
import { useState } from 'react'
import FFRating from '../../components/atoms/FFRating/FFRating'

const Index = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFRating
        value={value}
        size={'3rem'}
        handleRatingChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  )
}

export default Index
