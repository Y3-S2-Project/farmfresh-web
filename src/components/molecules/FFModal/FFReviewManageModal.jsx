import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CloseIcon from '../../../assets/icons/CloseIcon'
import FFRating from '../../atoms/FFRating/FFRating'
import FFButton from '../../atoms/FFButton/FFButton'

function FFReviewManageModal({
  title,
  subTitle,
  modalBoxStyles,
  topIconStyles,
  topLeftIcon,
  topRightIcon = <CloseIcon />,
  isEdit = false,
}) {
  const [rating, setRating] = React.useState(0)
  const handlePostReview = () => {
    console.log('Post Review')
  }
  const handleEditReview = () => {
    console.log('Edit Review')
  }
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 676,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '24px',
          padding: 0,
          margin: 0,
          ...modalBoxStyles,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginInline: '20px',
            marginTop: '32px',
            padding: 0,
            ...topIconStyles,
          }}
        >
          {topLeftIcon}
          {topRightIcon}
        </div>
        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: '700',
            fontSize: '36px',
            lineHeight: '54px',
            marginInline: '20px',
            marginTop: '12px',
          }}
        >
          {title}
        </Typography>
        <Divider variant="middle" />
        <Typography
          sx={{
            textAlign: 'left',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '25.6px',
            color: 'black',
            marginInline: '20px',
            marginTop: '12px',
          }}
        >
          {subTitle}
        </Typography>
        <FFRating
          value={rating}
          size="3.5rem"
          handleRatingChange={(e) => setRating(e.target.value)}
        />
        <div
          style={{
            marginInline: '20px',
          }}
        >
          <FFButton
            name={isEdit ? 'Save Review' : 'Post Review'}
            color="warning"
            handleClick={isEdit ? handleEditReview : handlePostReview}
            buttonStyles={{
              marginTop: '24px',
              marginBottom: '24px',
            }}
          />
        </div>
      </Box>
    </>
  )
}

export default FFReviewManageModal
