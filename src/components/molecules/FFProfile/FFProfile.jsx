import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import Popover from './Popover'
// import jwt_decode from 'jwt-decode'

// const profile = jwt_decode(localStorage.getItem('token')).data
const profile = {}
console.log('profile', profile)
const EMPTY_BOX = 'https://picsum.photos/200/300'
const DEFAULT_COVER_IMAGE = 'https://picsum.photos/200/300'
const FFProfile = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100vw',
          borderBottom: '2px solid #e0e0e0',
        }}
      >
        <MediaCard profile={profile} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'block',
              position: 'absolute',
              top: '80%',
              left: '26%',
              color: '#fff',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textShadow: '0px 0px 10px rgba(0,0,0,1)',
              }}
            >
              {profile.name ?? 'Name'}
            </Typography>
            <Typography
              variant="body1"
              color="#E4E3E0"
              sx={{
                textShadow: '0px 0px 10px rgba(0,0,0,1)',
              }}
            >
              {profile.description ?? 'Description'}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'block',
              position: 'absolute',
              top: '85%',
              right: '26%',
            }}
          >
            {/* <AuthButton
              role={role}
              setRole={setRole}
              user={user}
              setAnchorEl={setAnchorEl}
              handleClose={handleClose}
              name={profile.name}
              anchorEl={anchorEl}
            /> */}

            {/* {user.email === profile.admin.email ? (
                <AuthButton
                  role={'Admin'}
                  setAnchorEl={setAnchorEl}
                  handleClose={handleClose}
                  name={profile.name}
                  anchorEl={anchorEl}
                />
              ) : checkMemberValidity() ? (
                <AuthButton
                  role={'Member'}
                  setAnchorEl={setAnchorEl}
                  handleClose={handleClose}
                  name={profile.name}
                  anchorEl={anchorEl}
                />
              ) : (
                <AuthButton role={'Follow'} />
              )} */}
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '70vw',
            marginLeft: '15vw',
            marginTop: '3vh',
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            <Grid item sm={8}>
              <Paper
                sx={{
                  padding: '2rem',
                  margin: '1rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {`Welcome to ${profile?.name ?? 'Circle'}`}
                </Typography>
                <img src={EMPTY_BOX} alt="no content to display" srcset="" />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Circle is empty.
                </Typography>
                <Typography variant="body1">
                  There are no posts or questions in the Circle yet.
                </Typography>
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper
                sx={{
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '1rem',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Details
                </Typography>
                <Divider sx={{ marginTop: '1rem' }} />
                <Typography variant="body1" sx={{ marginTop: '1rem' }}>
                  {profile?.details || 'No details yet.'}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

// function AuthButton({
//   role,
//   user,
//   setRole,
//   setAnchorEl,
//   anchorEl,
//   handleClose,
//   name,
// }) {
//   console.log('authbutton ::::::::::::', role)
//   const handleFollow = async () => {
//     try {
//       await joinCircle({
//         name,
//         user: {
//           _id: user._id,
//           username: user.username,
//           email: user.email,
//         },
//       })
//       setRole('Member')
//     } catch (error) {}
//   }
//   return role === 'Follow' ? (
//     <Button
//       variant="outlined"
//       startIcon={roles.follow}
//       sx={{
//         backgroundColor: '#fff',
//         color: '#000',
//         fontWeight: 'bold',
//         textTransform: 'none',
//         borderRadius: '20px',
//         boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
//         '&:hover': {
//           backgroundColor: '#000',
//           color: '#fff',
//         },
//       }}
//       onClick={handleFollow}
//     >
//       {role}
//     </Button>
//   ) : (
//     <>
//       <Button
//         variant="outlined"
//         startIcon={roles[role.toLowerCase()]}
//         sx={{
//           backgroundColor: '#fff',
//           color: '#000',
//           fontWeight: 'bold',
//           textTransform: 'none',
//           borderRadius: '20px',
//           boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
//           '&:hover': {
//             backgroundColor: '#000',
//             color: '#fff',
//           },
//         }}
//         onClick={(event) => setAnchorEl(event.currentTarget)}
//       >
//         {role}
//       </Button>
//       <Popover
//         anchorEl={anchorEl}
//         content={`Go to ${role} Dashboard`}
//         handleClose={handleClose}
//         className={`cursor-pointer`}
//         name={name}
//         role={role}
//       />
//     </>
//   )
// }

function MediaCard({ profile }) {
  return (
    <>
      <Card sx={{ maxWidth: '100vw' }}>
        <CardMedia
          component="img"
          image={profile?.coverImage || DEFAULT_COVER_IMAGE}
          alt="circle cover image"
          className="blur-md"
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
            height: '55vh',
            width: '100vw',
            maxHeight: '100vh',
            maxWidth: '100vw',
            filter: 'brightness(0.5) blur(5px)',
          }}
        />

        <CardMedia
          component="img"
          image={profile?.coverImage || DEFAULT_COVER_IMAGE}
          alt="circle cover image"
          sx={{
            position: 'absolute',
            top: '0%',
            left: '25%',
            objectFit: 'cover',
            objectPosition: 'center',
            height: '35vh',
            width: '75vw',
            maxHeight: '50vh',
            maxWidth: '50vw',
            borderRadius: '2%',
          }}
        />
      </Card>
      <Avatar
        alt={profile.name}
        src={profile.iconImage}
        sx={{
          width: 150,
          height: 150,
          position: 'absolute',
          top: '35%',
          left: '27%',
          // transform: 'translate(-180%, -80%)',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          borderRadius: '12%',
        }}
        variant="square"
      />
    </>
  )
}

export default FFProfile
