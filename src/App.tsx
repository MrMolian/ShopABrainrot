import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { Marketplace } from './pages/marketplace'
import { MyStocks } from './pages/mystocks'
import { Settings } from './pages/settings'
import { BaseLayout } from './pages/base_layout'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { ProtectedRoute } from './pages/base_auth'
import { AuthProvider } from './contexts/auth_context'

function App() {
    return (
      <main className="flex-1">
        <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute><BaseLayout /></ProtectedRoute>}> 
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/my-stocks" element={<MyStocks />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
        </AuthProvider>
      </main>
    )   
}

export default App
