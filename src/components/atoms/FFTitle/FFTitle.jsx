import React from 'react'
import { Container } from '@mui/material'
export const FFTitle = ({ title }) => {
  return (
    <Container>
      <div className="text-3xl font-semibold flex justify-center mt-10 mb-10">
        {title}
      </div>
    </Container>
  )
}
