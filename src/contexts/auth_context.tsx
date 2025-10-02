// authContext.tsx
import { createContext, useContext, useState } from "react"
import { api_login, api_logout } from "../api/auth" 

type AuthContextType = {
  isAuth: boolean
  login: (name: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuth, setIsAuth] = useState(false)

  const login = async (name: string, password: string) => {
    const success = await api_login(name, password);
    setIsAuth(success);
    return success;
  }

  const logout = () => setIsAuth(!api_logout())

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
