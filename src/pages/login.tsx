import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { HorizontalDivider } from "../components/divider";
import { CentralMenu } from "../pages/base_auth";
import { FormInput } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth_context";
import { useState } from "react"


export function LoginButton({ username, password }: { username: string, password: string }) {
  const { login } = useAuth()
  const navigate = useNavigate()
  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const success = await login(username, password)
        if (success) {
            navigate("/")
        }
    }
  return (
    <button
      className="p-2 rounded-lg bg-[var(--palette-surface)] text-[var(--palette-text)]"
      type="submit"
      onClick={onLogin}
    >
      Login
    </button>
  )
}


export function LoginLink() {
    return (
        <p className="text-center text-lg">Don't have an account? <Link to="/register">Sign up</Link></p>
    )
}

export function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    return (
      <form className="flex flex-col gap-2" action="">
        <h1 className="text-2xl">Login to your account</h1>
        <FormInput
          placeholder="Username"
          type="text"
          icon={<AiOutlineUser />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          placeholder="Password"
          type="password"
          icon={<MdOutlineLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <HorizontalDivider m={10} />
        <LoginButton username={username} password={password} />
        <LoginLink />
      </form>
    )
  }
export function Login() {
    return (
        <CentralMenu>
            <LoginForm />
        </CentralMenu>
    )
}