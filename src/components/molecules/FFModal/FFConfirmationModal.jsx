import * as React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import CloseIcon from '../../../assets/icons/CloseIcon'
import FFButton from '../../atoms/FFButton/FFButton'
import BinIcon from '../../../assets/icons/BinIcon'
import CrossIcon from '../../../assets/icons/CrossIcon'
import { deleteReview } from '../../../services/review'

function FFConfirmationModal({
  title,
  message,
  width = '559px',
  borderRadius = '24px',
  topLeftIcon,
  topRightIcon = <CloseIcon />,
  topIconStyles,
  modalBoxStyles,
  modalTitleStyles,
  modalMessageStyles,
  cancellable = true,
  review_id,
  handleClose,
}) {
  const handleDelete = () => {
    deleteReview(review_id)
      .then((res) => {
        console.log(res)
        handleClose()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 559,
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
            fontSize: '24px',
            lineHeight: '36px',
            margin: '12px 20px 20px 12px',
            padding: 0,
            ...modalTitleStyles,
          }}
        >
          {title}
        </Typography>
        <Divider variant="middle" />
        <div
          sx={{
            padding: '16px 20px 0px 20px',
            margin: 0,
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '25.6px',
              color: 'black',
              ...modalMessageStyles,
            }}
          >
            {message}
          </Typography>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px 20px 24px 20px',
            padding: 0,
          }}
        >
          <FFButton
            name="Delete"
            color="error"
            endIcon={<BinIcon />}
            handleClick={handleDelete}
            buttonStyles={{ marginBottom: '12px' }}
          />
          {cancellable && (
            <FFButton
              name="Cancel"
              endIcon={<CrossIcon />}
              handleClick={handleClose}
            />
          )}
        </div>
      </Box>
    </>
  )
}
export default FFConfirmationModal
