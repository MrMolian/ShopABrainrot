import { CentralMenu } from "../pages/base_auth";
import { FormInput } from "../components/form";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { HorizontalDivider } from "../components/divider";
import { Link } from "react-router-dom";

export function RegisterButton() {
    return (
        <button className="p-2 rounded-lg bg-[var(--palette-surface)] text-[var(--palette-text)]" type="submit">Register</button>
    )
}
export function RegisterLink() {
    return (
        <p className="text-center text-lg">Already have an account? <Link to="/login">Login</Link></p>
    )
}
export function RegisterForm() {
    return (
        <form className="flex flex-col gap-2" action="">
            <h1 className="text-center text-2xl">Create an account</h1>
            <FormInput placeholder="Username" type="text" icon={<AiOutlineUser />} />
            <FormInput placeholder="Password" type="password" icon={<MdOutlineLock />} />
            <FormInput placeholder="Confirm Password" type="password" icon={<MdOutlineLock />} />
            <HorizontalDivider m={10}/> 
            <RegisterButton />
            <RegisterLink />
        </form>
    )
}
export function Register() {
    return (
        <CentralMenu>
            <RegisterForm />
        </CentralMenu>
    )
}