import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../../../assets/Logo'
import {
  CUSTOMER_NAV_MENU_ONE,
  CUSTOMER_NAV_MENU_TWO,
  NAV_DROPDOWN,
} from '../../../utils/constants'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../../../redux/features/userSlice'

function FFNavBar() {
  const currentUser = useSelector(getCurrentUser)
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
      }}
      position="static"
    >
      <Container maxWidth="xxl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: '64px',
          }}
          className=" w-full"
          disableGutters
        >
          <Logo />
          {/* mobile screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {CUSTOMER_NAV_MENU_ONE.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {CUSTOMER_NAV_MENU_ONE.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* large screen */}
          <Box sx={{ flexGrow: 0 }} className="flex items-center">
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
              }}
            >
              {CUSTOMER_NAV_MENU_TWO.map((page) => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#000', display: 'block' }}
                >
                  {page}
                </Typography>
              ))}
              <Box>
                <Tooltip title="Open settings">
                  <Box sx={{}}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Christan" src="#" />
                    </IconButton>
                  </Box>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {NAV_DROPDOWN.map(({ label, icon }, key) => (
                    <MenuItem
                      key={key}
                      onClick={handleCloseUserMenu}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px',
                        alignItems: 'center',
                      }}
                    >
                      {icon}
                      <Typography textAlign="center">{label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default FFNavBar
