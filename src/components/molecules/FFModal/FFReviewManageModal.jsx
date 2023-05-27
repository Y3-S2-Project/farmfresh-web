import React from 'react'
import { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CloseIcon from '../../../assets/icons/CloseIcon'
import FFRating from '../../atoms/FFRating/FFRating'
import FFButton from '../../atoms/FFButton/FFButton'
import FFForm from '../../molecules/FFForm/FFForm'
import FFTextArea from '../../atoms/FFInputField/FFTextArea'
import FFFileUploadField from '../../atoms/FFFileUploadField/FFFileUploadField'
import UploadIcon from '../../../assets/icons/UploadIcon'
import { createReview, updateReview } from '../../../services/review'

function FFReviewManageModal({
  title,
  subTitle,
  modalBoxStyles,
  topIconStyles,
  topLeftIcon,
  topRightIcon = <CloseIcon />,
  isEdit = false,
  review,
  handleClose,
}) {
  const [rating, setRating] = useState(review?.rating || 0)
  const [reviewText, setReviewText] = useState(review?.review_text || '')
  const [reviewImage, setReviewImage] = useState(review?.review_image || '')
  const review_type = review.product_id ? 'product' : 'farmer'

  const handlePostReview = () => {
    console.log('Post Review')
    const newReview = {
      review_rating: rating,
      review_description: reviewText,
      image: reviewImage,
      user_id: review.user_id,
    }
    if (review_type === 'product') {
      newReview.product_id = review.product_id
    } else {
      newReview.farmer_id = review.farmer_id
    }
    createReview(newReview)
      .then((res) => {
        console.log('Review Created', res)
        setRating(0)
        setReviewText('')
        setReviewImage('')
        handleClose()
      })
      .catch((err) => {
        console.log('Review Creation Failed', err)
        setRating(0)
        setReviewText('')
        setReviewImage('')
        handleClose()
      })
  }
  const handleEditReview = () => {
    console.log('Edit Review')
    const updatedReview = {
      review_rating: rating,
      review_description: reviewText,
      image: reviewImage,
    }
    updateReview(updatedReview)
      .then((res) => {
        console.log('Review Updated', res)
        setRating(0)
        setReviewText('')
        setReviewImage('')
        handleClose()
      })
      .catch((err) => {
        console.log('Review Updation Failed', err)
        setRating(0)
        setReviewText('')
        setReviewImage('')
        handleClose()
      })
  }
  const handleReviewImageUpload = (e) => {
    console.log('Review Image Upload', e.target.files[0])
    setReviewImage(e.target.files[0])
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
            marginTop: '20px',
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
        <FFForm>
          <FFRating
            value={rating}
            size="2.5rem"
            handleRatingChange={(e) => setRating(e.target.value)}
          />
          <div
            style={{
              marginInline: '20px',
              marginTop: '10px',
              marginBottom: '4px',
            }}
          >
            <FFTextArea
              label={'Review'}
              type={'textarea'}
              labelClassName={'block text-base font-medium text-black'}
              textareaClassName={
                'appearance-none resize-none w-full h-40 rounded-lg block bg-[#F4F4F5] border border-[#F4F4F5] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2'
              }
            />
          </div>
          <div
            style={{
              marginInline: '20px',
              marginTop: '5px',
            }}
          >
            <FFFileUploadField
              label={'Upload Image'}
              labelClassName={'block text-base font-medium text-black'}
              boxClassName={
                'flex flex-col items-center justify-center w-full h-35 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F4F4F5] mt-1'
              }
              icon={<UploadIcon />}
              descriptiveText={true}
              handleFileUpload={handleReviewImageUpload}
            />
          </div>
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
        </FFForm>
      </Box>
    </>
  )
}

export default FFReviewManageModal
