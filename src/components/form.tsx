import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
export function FormInput({
  placeholder,
  type,
  icon,
  value,
  onChange,
}: {
  placeholder: string
  type: string
  icon: React.ReactNode
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [showPassword, setShowPassword] = useState(false)

  if (type === "text") {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center">{icon}</div>
        <input
          className="p-2 rounded-lg"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }

  if (type === "password") {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center">{icon}</div>
        <div className="relative flex-1">
          <input
            className="p-2 rounded-lg w-full"
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
      </div>
    )
  }

  return null
}
