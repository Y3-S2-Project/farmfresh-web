import React from 'react'
import { Button } from '@mui/material'

const FFButton = ({
  name,
  variant = 'contained',
  color = 'primary',
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
        sx={{
          textTransform: 'none',
          height: '64px',
          borderRadius: '50px',
          ...buttonStyles,
        }}
        onClick={handleClick}
      >
        {name}
      </Button>
    </>
  )
}

export default FFButton
