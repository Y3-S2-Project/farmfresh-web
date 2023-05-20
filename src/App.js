import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { AdminRoutes } from './routes/AdminRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <AdminRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
