import './sidebar.css'
// MODULE
import type { ReactNode } from "react";
import { Link } from 'react-router-dom'
// CONSTANTS
import { website_name } from "../constants/strings";
// ICONS
import { FaHome, FaStore, FaWarehouse } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export function SidebarTitle({text}: {text: string}) {
    return (
        <h1 className="sidebar-title inline-flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-5 h-5" />
            {text}  
        </h1>
    )
}
export function SidebarLink({text, href, icon}: {text: string; href: string; icon?: ReactNode} ) {
  return (
      <Link to={href}  className="sidebar-link flex items-center gap-2">
          {icon && <span className="inline-flex items-center">{icon}</span>}
          <p>{text}</p>
      </Link>
  )
}
export function SidebarLogout() {
    return (
      <Link to="/logout" className="sidebar-logout flex items-center gap-2">
          <span className="inline-flex items-center">{<FiLogOut />}</span>
          <p>Logout</p>
      </Link>
    )
}
export function Sidebar() {
    return (
      <aside >
        <SidebarTitle text={website_name} />
        <nav>
          <ul className="space-y-2">
            <li>
              <SidebarLink text="Home" href="/" icon={<FaHome />} />
            </li>
            <li>
              <SidebarLink text="Marketplace" href="/marketplace" icon={<FaStore />} />
            </li>
            <li>
              <SidebarLink text="Profile" href="/profile" icon={<GoPerson />} />
            </li>
            <li>
              <SidebarLink text="MyStocks" href="/my-stocks" icon={<FaWarehouse />} />
            </li>
            <li>
              <SidebarLink  text="Settings" href="/settings" icon={<FiSettings />} />
            </li>
          </ul>
        </nav>
        <SidebarLogout />
      </aside>
    )
}