type TextProps = {
  variant?: "title" | "subtitle" | "body" | "caption" | "label"
  tone?: "default" | "muted" | "success" | "error"
  children: React.ReactNode
  className?: string
}

const Text = ({
  variant = "body",
  tone = "default",
  children,
  className = "",
}: TextProps) => {
  const variants = {
    title: "text-lg font-semibold",
    subtitle: "text-sm font-semibold",
    body: "text-sm",
    caption: "text-xs",
    label: "text-xs uppercase tracking-wide",
  }

  const tones = {
    default: "text-gray-900",
    muted: "text-gray-500",
    success: "text-emerald-600",
    error: "text-red-600",
  }

  return (
    <p className={`${variants[variant]} ${tones[tone]} ${className}`}>
      {children}
    </p>
  )
}

export default Text