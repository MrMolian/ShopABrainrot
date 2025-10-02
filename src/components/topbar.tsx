import { AiOutlineBell } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import type { TopBarProps } from "../models/user_data";


export function ProfileBar({ username, avatar, notifications}: {username: string, avatar: string, notifications: number}) {
    return (
        <div className="flex justify-between items-center gap-5 pr-10">
            <button className="relative flex items-center text-lg font-bold text-[var(--palette-text)] mr-2">
                <AiOutlineBell className="mr-1" />
                {notifications > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                    {notifications}
                </span>
                )}
            </button>

        <   p className="text-lg font-bold text-[var(--palette-text)]">@{username}</p>
            <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
        </div>
    )
}


export function WalletBar({ balance }: {balance: number}) {
    return (
        <div className="flex items-center gap-2 bg-[var(--palette-bg)] mr-5 rounded-lg p-2">
            <MdAccountBalanceWallet className="mr-1" />
            <p className="text-lg font-bold text-[var(--palette-surface)]"> Your balance : ${balance}</p>
        </div>
    )
}

export function TopBar({ username, avatar, notifications, balance }: TopBarProps) {
    return (
        <header>
            <div className="flex m-4 rounded-lg items-center bg-[var(--palette-surface)] h-16 justify-end">
            <WalletBar balance={balance}/>
            <ProfileBar username={username} avatar={avatar} notifications={notifications}/>
            </div>
        </header>
    )
}