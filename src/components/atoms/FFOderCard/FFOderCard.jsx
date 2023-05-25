import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import orderimg from '../../../assets/order/orderimg.png'
import InfoIcon from '../../../assets/icons/InfoIcon'

const FFOderCard = ({ svg, name, price, badge, info, quantity }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Card
        sx={{
          width: 200,
          height: 260,
          margin: '20px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          backgroundColor: '#F5F3F0',
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transition: 'ease-in-out 150ms',
          },
        }}
      >
        <CardContent>
          <div className="flex justify-center">
            <img
              src={orderimg}
              alt="Order Image"
              style={{
                maxWidth: '50%',
                maxHeight: '5%',
              }}
            />
          </div>

          <br />
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{ fontSize: 18, textAlign: 'left', fontWeight: '600' }}
              gutterBottom
            >
              {name}
            </Typography>
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: '800' }}>
                x {quantity}
              </Typography>
              <Typography
                sx={{ textAlign: 'right', fontSize: 16, fontWeight: '600' }}
              >
                Rs: {price}
              </Typography>
            </Box>
          </Box>
          <br />
          <Box
            style={{
              display: 'flex',
            }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
                paddingRight: '50px',
              }}
            >
              {badge}
            </Box>
            <a href={info}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'right',
                  justifyContent: 'right',
                }}
              >
                {<InfoIcon />}
              </Box>
            </a>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default FFOderCard
