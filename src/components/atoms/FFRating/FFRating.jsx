import React from 'react'
import { Rating, Typography } from '@mui/material'

const FFRating = ({ value, handleRatingChange, size }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Rating
          name="half-rating"
          defaultValue={0}
          value={value}
          precision={0.5}
          onChange={handleRatingChange}
          sx={{
            fontSize: size,
          }}
        />
        <Typography>{value}</Typography>
      </div>
    </>
  )
}

export default FFRating
