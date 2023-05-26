import React from 'react'
import { Rating, Typography, styled } from '@mui/material'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#DEB225',
  },
  '& .MuiRating-iconHover': {
    color: '#DEB225',
  },
})
const FFRating = ({
  value,
  handleRatingChange,
  size,
  ratingStyles,
  textStyles,
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginInline: '20px',
          ...ratingStyles,
        }}
      >
        <StyledRating
          defaultValue={0}
          value={value}
          precision={0.5}
          onChange={handleRatingChange}
          sx={{
            fontSize: size,
          }}
          icon={<StarRoundedIcon fontSize="inherit" />}
          emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
        />
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            marginLeft: '25px',
            ...textStyles,
          }}
        >
          {value}
        </Typography>
      </div>
    </>
  )
}

export default FFRating
