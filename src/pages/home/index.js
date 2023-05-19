import { Paper } from '@mui/material'
import React from 'react'
import FFTable from '../../components/molecules/FFTable/FFTable'

const index = () => {
  return (
    <>
      <h1 className="hidden">Home</h1>
      {/* header */}
      {/* <Paper className="shadow-sm rounded-xl xl:py-3 xl:px-20 mx-16 mt-2"></Paper> */}
      {/* single row */}
      <FFTable />
    </>
  )
}

export default index
