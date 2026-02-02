import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

type WorkerContextType = {
  workerId: string
}

const WorkerContext = createContext<WorkerContextType | undefined>(undefined)

export const WorkerProvider = ({ children }: { children: ReactNode }) => {
  // Assuming that there is some sort of auth to login which would set this value
  const [workerId, setWorkerId] = useState("7f90df6e-b832-44e2-b624-3143d428001f")

  return (
    <WorkerContext.Provider value={{ workerId }}>
      {children}
    </WorkerContext.Provider>
  )
}

export const useWorker = () => {
  const context = useContext(WorkerContext)
  if (context === undefined) {
    throw new Error("useWorker must be used within a WorkerProvider")
  }
  return context
}
