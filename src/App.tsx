import { Header, JobMatches }from "./components/components"
import { WorkerProvider } from "./context/WorkerContext"

const App = () => {

  return (
    <WorkerProvider>
        <Header />
        <JobMatches />
    </WorkerProvider>
  )
}

export default App
