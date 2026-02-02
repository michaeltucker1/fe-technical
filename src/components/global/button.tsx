type ButtonProps = {
  variant?: "primary" | "secondary" | "danger"
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: "border border-red-300 text-red-600 hover:bg-red-50",
  }

  return (
    <button
      {...props}
      className={`rounded-lg py-2 px-4 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button