import type { JSX } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/auth_context"


export function CentralMenu(props: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen  bg-[var(--palette-surface)] justify-center items-center">
            <div className="flex h-1/10  bg-[var(--palette-bg)] items-center p-20 rounded-lg">
                {props.children}
            </div>
        </div>
    )
}

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuth } = useAuth()
  return isAuth ? children : <Navigate to="/login" replace />
}
