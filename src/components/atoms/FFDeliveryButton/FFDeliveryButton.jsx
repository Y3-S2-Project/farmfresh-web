import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const FFDeliveryButton = ({ handleClick }) => {

  return (
    <div className="flex ">
      {clicked ? (
        <Card
          className="hover:scale-100 transition ease-in-out delay-100 duration-150"
          sx={{
            width: 200,
            height: 150,
            margin: '20px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#64BF47',
            borderRadius: '5px',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CardContent>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50px',
              }}
            >
              <svg
                width="126"
                height="92"
                viewBox="0 0 126 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M97.3636 83.375C95.0852 83.375 92.9001 82.4663 91.289 80.8488C89.6779 79.2313 88.7727 77.0375 88.7727 74.75C88.7727 72.4625 89.6779 70.2687 91.289 68.6512C92.9001 67.0337 95.0852 66.125 97.3636 66.125C99.6421 66.125 101.827 67.0337 103.438 68.6512C105.049 70.2687 105.955 72.4625 105.955 74.75C105.955 77.0375 105.049 79.2313 103.438 80.8488C101.827 82.4663 99.6421 83.375 97.3636 83.375ZM105.955 31.625L117.18 46H91.6364V31.625M28.6364 83.375C26.3579 83.375 24.1728 82.4663 22.5617 80.8488C20.9506 79.2313 20.0455 77.0375 20.0455 74.75C20.0455 72.4625 20.9506 70.2687 22.5617 68.6512C24.1728 67.0337 26.3579 66.125 28.6364 66.125C30.9148 66.125 33.0999 67.0337 34.7111 68.6512C36.3222 70.2687 37.2273 72.4625 37.2273 74.75C37.2273 77.0375 36.3222 79.2313 34.7111 80.8488C33.0999 82.4663 30.9148 83.375 28.6364 83.375ZM108.818 23H91.6364V0H11.4545C5.09727 0 0 5.1175 0 11.5V74.75H11.4545C11.4545 79.325 13.2648 83.7126 16.487 86.9476C19.7092 90.1826 24.0795 92 28.6364 92C33.1933 92 37.5635 90.1826 40.7857 86.9476C44.008 83.7126 45.8182 79.325 45.8182 74.75H80.1818C80.1818 79.325 81.992 83.7126 85.2143 86.9476C88.4365 90.1826 92.8067 92 97.3636 92C101.921 92 106.291 90.1826 109.513 86.9476C112.735 83.7126 114.545 79.325 114.545 74.75H126V46L108.818 23Z"
                  fill="#F5F3F0"
                />
              </svg>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Card
          className="hover:scale-100 transition ease-in-out delay-100 duration-150"
          sx={{
            width: 200,
            height: 150,
            margin: '20px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#F5F3F0',
            borderRadius: '5px',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CardContent>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50px',
              }}
            >
              <svg
                width="126"
                height="92"
                viewBox="0 0 126 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M97.3636 83.375C95.0852 83.375 92.9001 82.4663 91.289 80.8488C89.6779 79.2313 88.7727 77.0375 88.7727 74.75C88.7727 72.4625 89.6779 70.2687 91.289 68.6512C92.9001 67.0337 95.0852 66.125 97.3636 66.125C99.6421 66.125 101.827 67.0337 103.438 68.6512C105.049 70.2687 105.955 72.4625 105.955 74.75C105.955 77.0375 105.049 79.2313 103.438 80.8488C101.827 82.4663 99.6421 83.375 97.3636 83.375ZM105.955 31.625L117.18 46H91.6364V31.625M28.6364 83.375C26.3579 83.375 24.1728 82.4663 22.5617 80.8488C20.9506 79.2313 20.0455 77.0375 20.0455 74.75C20.0455 72.4625 20.9506 70.2687 22.5617 68.6512C24.1728 67.0337 26.3579 66.125 28.6364 66.125C30.9148 66.125 33.0999 67.0337 34.7111 68.6512C36.3222 70.2687 37.2273 72.4625 37.2273 74.75C37.2273 77.0375 36.3222 79.2313 34.7111 80.8488C33.0999 82.4663 30.9148 83.375 28.6364 83.375ZM108.818 23H91.6364V0H11.4545C5.09727 0 0 5.1175 0 11.5V74.75H11.4545C11.4545 79.325 13.2648 83.7126 16.487 86.9476C19.7092 90.1826 24.0795 92 28.6364 92C33.1933 92 37.5635 90.1826 40.7857 86.9476C44.008 83.7126 45.8182 79.325 45.8182 74.75H80.1818C80.1818 79.325 81.992 83.7126 85.2143 86.9476C88.4365 90.1826 92.8067 92 97.3636 92C101.921 92 106.291 90.1826 109.513 86.9476C112.735 83.7126 114.545 79.325 114.545 74.75H126V46L108.818 23Z"
                  fill="#64BF47"
                />
              </svg>
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default FFDeliveryButton
