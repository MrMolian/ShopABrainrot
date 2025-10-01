import type { ReactNode } from "react";
import './sidebar.css'
import { website_name } from "../constants/names";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
const SidebarTitle = ({text}: {text: string}) => {
    return (
        <h1 className="sidebar-title inline-flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-5 h-5" />
            {text}
        </h1>
    )
}
const SidebarLink = ({text, icon}: {text: string; icon?: ReactNode} ) => {
  return (
      <a className="sidebar-link flex items-center gap-2">
          {icon && <span className="inline-flex items-center">{icon}</span>}
          <p>{text}</p>
      </a>
  )
}
const Sidebar = () => {
    return (
      <aside >
        <SidebarTitle text={website_name} />
        <nav>
          <ul className="space-y-2">
            <li>
              <SidebarLink text="Marketplace" icon={<FaHome />} />
            </li>
            <li>
              <SidebarLink text="Profile" icon={<GoPerson />} />
            </li>
            <li>
              <SidebarLink text="Settings" icon={<FiSettings />} />
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
  
  export default Sidebar