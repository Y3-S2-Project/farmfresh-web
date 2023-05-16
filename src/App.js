import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import CommonRoutes from './routes/CommonRoutes'

function App() {
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
