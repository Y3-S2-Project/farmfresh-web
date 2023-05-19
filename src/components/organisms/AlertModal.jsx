import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import WarningIcon from '@mui/icons-material/Warning'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

function BootstrapDialogTitle(props) {
  const { children, onClose, title, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon
            style={{
              color: 'black',
              backgroundColor: 'grey',
              borderRadius: '50%',
              opacity: '0.4',
              padding: '4px'
            }}
          />
        </IconButton>
      ) : null}
      <div className="font-bold">{title}</div>
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
}
const DialogBody = ({ type, handleClose, body }) => {
  switch (type) {
    case 'product-accept':
      return (
        <div>
          <DialogContent dividers>
            <Typography gutterBottom style={{ fontSize: '16px' }}>
              {body}
            </Typography>
          </DialogContent>
          <div className="flex flex-col">
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                backgroundColor: 'rgba(100, 191, 71, 0.2)',
                color: '#1F4647',
                margin: '10px',
                borderRadius: '50px',
                height: '64px',
                width: '519px'
              }}
            >
              Confirm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: '4px' }}
              >
                <path d="M20 6L9 17L4 12" />
              </svg>
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                color: 'black',
                margin: '10px',
                marginTop: '0px',
                borderRadius: '50px',
                height: '64px',
                width: '519px'
              }}
            >
              Cancel
              <CloseIcon style={{ marginRight: '4px' }} />
            </Button>
          </div>
        </div>
      )
    case 'product-delete':
      return (
        <div>
          <DialogContent dividers>
            <Typography gutterBottom style={{ fontSize: '16px' }}>
              {body}
            </Typography>
          </DialogContent>
          <div className="flex flex-col">
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                backgroundColor: '#FEE2E2',
                color: '#7F1D1D',
                margin: '10px',

                borderRadius: '50px',
                height: '64px',
                width: '519px'
              }}
            >
              Delete
              <DeleteIcon style={{ marginLeft: '4px', color: '#7F1D1D' }} />
            </Button>

            <Button
              variant="outlined"
              onClick={handleClose}
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                color: 'black',
                margin: '10px',
                marginTop: '0px',
                borderRadius: '50px',
                height: '64px',
                width: '519px'
              }}
            >
              Cancel
              <CloseIcon style={{ marginRight: '4px' }} />
            </Button>
          </div>
        </div>
      )

    default:
      return
  }
}
export default function AlertModal({ title, body, type }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          position: 'fixed',
          width: '605px',
          height: '410px',
          top: '30%',
          left: '35%',
          bottom: '30%',
          right: '35%'
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          title={title}
          onClose={handleClose}
        >
          <WarningIcon style={{ color: 'yellow', backgroundColor: 'white' }} />
        </BootstrapDialogTitle>
        <DialogBody type={type} body={body} handleClose={handleClose} />
      </BootstrapDialog>
    </div>
  )
}
