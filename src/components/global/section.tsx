import { Text } from "../components"

type SectionProps = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <div className="space-y-1">
    <Text variant="subtitle">{title}</Text>
    {children}
  </div>
)

export default Section