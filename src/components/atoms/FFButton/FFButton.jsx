import React from 'react'
import { Button, Typography } from '@mui/material'

const FFButton = ({
  name,
  variant = 'contained',
  color = 'primary',
  fontColor = 'black',
  startIcon,
  endIcon,
  buttonStyles,
  handleClick,
}) => {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth
        disableElevation
        sx={{
          textTransform: 'none',
          height: '64px',
          borderRadius: '50px',
          ...buttonStyles,
        }}
        onClick={handleClick}
      >
        <Typography color={fontColor}>{name}</Typography>
      </Button>
    </>
  )
}

export default FFButton
