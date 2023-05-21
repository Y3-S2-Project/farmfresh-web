import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import CommonRoutes from './routes/CommonRoutes'
import CustomerRoutes from './routes/CustomerRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <CommonRoutes />
        <AuthRoutes />
        <CustomerRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
