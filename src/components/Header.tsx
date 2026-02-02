import { useEffect, useState } from "react"
import { getWorkerProfile } from "../api/worker"
import { useWorker } from "../context/WorkerContext"
import type { WorkerProfile } from "../types/types"
import logo from "../assets/logo.png"

const Header = () => {
  const { workerId } = useWorker()
  const [worker, setWorker] = useState<WorkerProfile | null>(null)

  useEffect(() => {
    if (!workerId) {
      setWorker(null)
      return
    }

    const fetchProfile = async () => {
      try {
        const profile = await getWorkerProfile({ workerId })
        setWorker(profile)
      } catch (err) {
        setWorker(null)
      }
    }

    fetchProfile()
  }, [workerId])

  return (
    <header className="flex items-center justify-between bg-black w-full h-20 px-8">
      <img src={logo} alt="Logo" className="h-10" />

      {worker && (
        <span className="text-white text-lg font-medium">
          {worker.firstName} {worker.lastName}
        </span>
      )}
    </header>
  )
}

export default Header
