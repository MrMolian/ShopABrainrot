import { Sidebar } from "../components/sidebar"
import { Outlet } from "react-router-dom"
import { TopBar } from "../components/topbar"

export function BaseLayout() {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-[var(--palette-bg)]">
          <TopBar username="MrMolian" avatar="https://f4.bcbits.com/img/a4131207323_5.jpg" notifications={9} balance={100}/>
          <Outlet />
        </main>
      </div>
    )
  }