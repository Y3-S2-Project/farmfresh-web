import React from 'react'
import Chip from '@material-ui/core/Chip'

const FFStatusBadges = ({
  label,
  backgroundColor,
  textColor,
  borderRadius,
}) => {
  const chipStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: borderRadius,
    padding: '4px 8px',
    fontWeight: 'bold',
  }

  return (
    <div>
      <Chip label={label} style={chipStyles} />
    </div>
  )
}

export default FFStatusBadges
