import React from 'react'
import { Rating, Typography } from '@mui/material'
import { RatingLables } from '../../../constants/RatingLables'
const FFRating = ({ value, handleRatingChange }) => {
  return (
    <>
      <Rating
        name="half-rating"
        defaultValue={0}
        value={value}
        precision={0.5}
        onChange={handleRatingChange}
      />
      {RatingLables.value}
      <Typography>{RatingLables.value}</Typography>
    </>
  )
}

export default FFRating
