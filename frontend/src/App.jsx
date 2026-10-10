import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Features from './components/landing/Features'
import Pricing from './components/landing/Pricing'
import About from './components/landing/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={
          <ProtectedRoute> <Dashboard /></ProtectedRoute>
        } />

      </Routes>

      


    </BrowserRouter>
  )
}

export default App
