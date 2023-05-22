import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { useSelector } from 'react-redux'
import { getAccessToken } from './redux/features/userSlice'
import { ROLES } from './utils/constants'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/theme'
import CustomerRoutes from './routes/CustomerRoutes'

function App() {
  const currentUser = useSelector(getAccessToken)
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CommonRoutes />
          <AuthRoutes />
          <CustomerRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
