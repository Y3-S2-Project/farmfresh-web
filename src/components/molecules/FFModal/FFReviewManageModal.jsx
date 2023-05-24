import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CloseIcon from '../../../assets/icons/CloseIcon'
import FFRating from '../../atoms/FFRating/FFRating'
import FFButton from '../../atoms/FFButton/FFButton'
import FFForm from '../../molecules/FFForm/FFForm'
import FFTextArea from '../../atoms/FFInputField/FFTextArea'
import FFFileUploadField from '../../atoms/FFFileUploadField/FFFileUploadField'
import UploadIcon from '../../../assets/icons/UploadIcon'

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
