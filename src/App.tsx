import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { Marketplace } from './pages/marketplace'
import { MyStocks } from './pages/mystocks'
import { Settings } from './pages/settings'
import { BaseLayout } from './pages/base_layout'
import { Login } from './pages/login'

function App() {
    return (
      <main className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/my-stocks" element={<MyStocks />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </main>
    )   
}

export default App
