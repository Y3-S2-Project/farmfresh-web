import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import SideNavigation from './SideNavigation'
import { Route, Routes } from 'react-router-dom'

const FFDashboard = () => {
  const { role, name } = {}
  const itemsAdmin = [
    {
      name: 'Settings',
      //   icon: <SettingsIcon />,
      link: `settings`,
    },
    {
      name: 'People',
      //   icon: <GroupsIcon />,
      link: `people`,
    },
    {
      name: 'Stats',
      //   icon: <DonutSmallIcon />,
      link: `stats`,
    },
    {
      name: 'Leave Circle',
      //   icon: <LogoutIcon />,
      link: `leave`,
    },
  ]
  const itemsMember = [
    {
      name: 'People',
      //   icon: <GroupsIcon />,
      link: `people`,
    },
    {
      name: 'Leave Circle',
      //   icon: <LogoutIcon />,
      link: `leave`,
    },
  ]

  return (
    <>
      <Box>
        <TopBar name={name} role={role} />
      </Box>
      <Container>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 6 }}
          sx={{
            marginTop: '50px',
          }}
        >
          <Grid item md={3} zeroMinWidth>
            <Grid
              item
              sx={{
                marginBottom: '40px',
              }}
            >
              <Paper className={`p-5`}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {/* <ArrowBackIosIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => window.location.replace(`/circle/${name}`)}
                  /> */}
                  <Typography
                    variant="body1"
                    sx={{
                      // marginBottom: '10px',
                      fontSize: '14px',
                    }}
                  >
                    Back to Circle page
                  </Typography>
                </Box>
                {/* <Button
                    variant="outlined"
                    color="primary"
                    href={`/circle/${name}`}
                    sx={{
                      width: '100%',
                      textTransform: 'none',
                      borderRadius: '20px',
                      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                      '&:hover': {
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                      },
                    }}
                  >
                    Go Back
                  </Button> */}
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {/* {`${
                    role.substring(0, 1).toUpperCase() + role.substring(1)
                  } Dashboard`} */}
                </Typography>
              </Paper>
            </Grid>
            <Grid item className={`pb-10`} zeroMinWidth>
              <SideNavigation
                menuItems={role === 'admin' ? itemsAdmin : itemsMember}
              />
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid
              item
              sx={{
                marginBottom: '40px',
              }}
            >
              <Routes>
                {role === 'admin' && (
                  <>
                    {/* <Route path="/settings" element={<Settings />} /> */}
                    {/* <Route path="/stats" element={<Stats />} /> */}
                  </>
                )}
                {/* <Route path="/people" element={<People />} /> */}
                {/* <Route path="/leave" element={<Leave />} /> */}
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const TopBar = ({ name, role }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        // width: '100vw',
        p: 2,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          marginLeft: '15vw',
        }}
      >
        {name}
      </Typography>
      <Button
        variant="outlined"
        // startIcon={<SecurityIcon />}
        sx={{
          position: 'absolute',
          right: '24rem',
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
        onClick={(event) => console.log(event.currentTarget)}
      >
        {role}
      </Button>
    </Paper>
  )
}

export default FFDashboard
