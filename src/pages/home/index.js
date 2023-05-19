import React from 'react'
import FFModal from '../../components/molecules/FFModal/FFModal'
import ColouredWarningIcon from '../../assets/icons/ColouredWarningIcon'

const index = () => {
  return (
    <>
      <h1 className="hidden">Home</h1>
      <FFModal
        title="Confirm Deletion"
        topLeftIcon={<ColouredWarningIcon />}
        message={`Are you sure you want to delete this review? You won't be able to revoke this decision.`}
        cancellable={true}
      />
    </>
  )
}

export default index
