import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { HorizontalDivider } from "../components/divider";
export function LoginInput({ placeholder, type, icon }: { placeholder: string, type: string, icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                {icon}
            </div>
            <input className="p-2 rounded-lg" type={type} placeholder={placeholder} />
        </div>
    )
}
export function LogicButton() {
    return (
        <button className="p-2 rounded-lg bg-[var(--palette-surface)] text-[var(--palette-text)]" type="submit">Login</button>
    )
}
export function LoginLink() {
    return (
        <p className="text-center text-lg">Don't have an account? <a href="">Sign up</a></p>
    )
}
export function LoginMenu() {
    return (
        <div className="flex h-1/10 w-1/2 bg-[var(--palette-bg)] items-center p-20 rounded-lg">
            <form className="flex flex-col gap-2" action="">
                <h1 className="text-2xl">Login to your account</h1>
                <LoginInput placeholder="Username" type="text" icon={<AiOutlineUser />} />
                <LoginInput placeholder="Password" type="password" icon={<MdOutlineLock />} />
                <HorizontalDivider m={10}/> 
                <LogicButton />
                <LoginLink />
            </form>
        </div>
    )
}

export function Login() {
    return (
        <div className="flex h-screen  bg-[var(--palette-surface)] justify-center items-center">
            <LoginMenu />
        </div>
    )
}