import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { useSelector } from 'react-redux'
import { getAccessToken } from './redux/features/userSlice'
import { ROLES } from './utils/constants'

function App() {
  const currentUser = useSelector(getAccessToken)
  return (
    <>
      <BrowserRouter>
        <CommonRoutes />
        <AuthRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
