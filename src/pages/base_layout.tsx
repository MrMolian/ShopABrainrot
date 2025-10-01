import { Sidebar } from "../components/sidebar"
import { Outlet } from "react-router-dom"

export function BaseLayout() {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-[var(--palette-bg)]">
          <Outlet />
        </main>
      </div>
    )
  }