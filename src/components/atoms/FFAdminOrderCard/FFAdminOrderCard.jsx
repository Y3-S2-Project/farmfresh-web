import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const FFAdminOrderCard = ({ svg, name, value }) => {
 return (
   <div className="flex flex-col items-center justify-center h-screen">
     <Card
       sx={{
         width: 200,
         height: 150,
         margin: '20px',
         boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
       }}
     >
       <CardContent>
         <Box
           style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
           }}
         >
          {svg}
         </Box>
         <br></br>
         <Typography
           sx={{ fontSize: 14, textAlign: 'center' }}
           color="text.secondary"
           gutterBottom
         >
           {name}
         </Typography>
         <Typography
           sx={{ mb: 1.5, textAlign: 'center' }}
           color="text.secondary"
         >
           {value}
         </Typography>
       </CardContent>
     </Card>
   </div>
 )
}

export default FFAdminOrderCard
