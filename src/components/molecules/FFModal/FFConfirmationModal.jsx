import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CloseIcon from '../../../assets/icons/CloseIcon'
import FFButton from '../../atoms/FFButton/FFButton'
import BinIcon from '../../../assets/icons/BinIcon'
import CrossIcon from '../../../assets/icons/CrossIcon'

function FFModal({
  title,
  message,
  width = '559px',
  borderRadius = '24px',
  topLeftIcon,
  topRightIcon = <CloseIcon />,
  topIconStyles,
  modalTitleStyles,
  modalMessageStyles,
  cancellable = true,
}) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Modal
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        width={width}
        PaperProps={{ sx: { borderRadius: borderRadius } }}
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
        <DialogTitle
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
        </DialogTitle>
        <Divider variant="middle" />
        <DialogContent
          sx={{
            padding: '16px 20px 0px 20px',
            margin: 0,
          }}
        >
          <DialogContentText
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
          </DialogContentText>
        </DialogContent>
        <DialogActions
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
            handleClick={handleClose}
            buttonStyles={{ marginBottom: '12px' }}
          />
          {cancellable && (
            <FFButton
              name="Cancel"
              endIcon={<CrossIcon />}
              handleClick={handleClose}
            />
          )}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FFModal
