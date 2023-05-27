import { Modal, Fade, Backdrop } from '@mui/material'
import React from 'react'
import FFReviewManageModal from '../molecules/FFModal/FFReviewManageModal'
import FFConfirmationModal from '../molecules/FFModal/FFConfirmationModal'
import ColouredNotepadIcon from '../../assets/icons/ColouredNotepadIcon'
import ColouredWarningIcon from '../../assets/icons/ColouredWarningIcon'

const FFReviewModalController = ({ modal_type, open, handleClose, review }) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {modal_type === 'add' && (
            <FFReviewManageModal
              title="Write a Review"
              subTitle="Share your experience with us!"
              topLeftIcon={<ColouredNotepadIcon />}
              handleClose={handleClose}
            />
          )}
          {modal_type === 'edit' && (
            <FFReviewManageModal
              title="Edit Review"
              subTitle="Share your experience with us!"
              topLeftIcon={<ColouredNotepadIcon />}
              isEdit={true}
              handleClose={handleClose}
            />
          )}
          {modal_type === 'delete' && (
            <FFConfirmationModal
              title="Confirm Deletion"
              message={`Are you sure you want to delete this review?
            You will not be able to revoke this decision.`}
              topLeftIcon={<ColouredWarningIcon />}
              review_id={review.review_id}
              handleClose={handleClose}
            />
          )}
        </Fade>
      </Modal>
    </>
  )
}

export default FFReviewModalController
