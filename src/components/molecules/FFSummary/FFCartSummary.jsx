import React from 'react'
import { Box, Typography } from '@mui/material'
import FFButton from '../../atoms/FFButton/FFButton'

const cartTextStyle = {
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '32px',
  color: '#000000',
}
const cartRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
}

const FFCartSummary = ({ total, discount }) => {
  const handleProceedToCheckout = () => {
    console.log('Proceed to checkout')
  }
  return (
    <>
      <Box
        sx={{
          alignContent: 'right',
          border: '1px solid #00000080',
          borderRadius: '32px',
          boxShadow: '1px 1px 4px 0px #00000040',
          width: '612px',
          alignItems: 'left',
          float: 'right',
          padding: '19px 36px 19px 36px',
          margin: '10px 64px 32px 0px',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '38.4px',
            alignItems: 'left',
            color: '#1F4647',
          }}
        >
          Cart Summary
        </Typography>
        <div style={cartRowStyle}>
          <Typography sx={cartTextStyle}>Discount</Typography>
          <Typography sx={cartTextStyle}>{`Rs. ${discount.toFixed(
            2,
          )}`}</Typography>
        </div>
        <div style={cartRowStyle}>
          <Typography sx={cartTextStyle}>Total</Typography>
          <Typography sx={cartTextStyle}>{`Rs. ${total.toFixed(
            2,
          )}`}</Typography>
        </div>
        <FFButton
          name={'Proceed to Checkout'}
          color="warning"
          fontColor="#ffffff"
          handleClick={handleProceedToCheckout}
          buttonStyles={{
            marginTop: '20px',
            backgroundColor: '#DEB225',
          }}
          buttonFontStyles={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '36px',
          }}
        />
      </Box>
    </>
  )
}

export default FFCartSummary
