import { getWorkerJobs } from "../api/worker"
import { useWorker } from "../context/WorkerContext"
import { useState, useEffect, useCallback } from "react"
import { Text, Button, JobCard }from "./components"
import type { Job } from "../types/types"
 
const JobMatches = () => {

    const { workerId } = useWorker()

    const [workerJobs, setWorkerJobs] = useState<Job[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchWorkerJobs = useCallback(async () => {
        if (!workerId) {
            setError("Worker information is unavailable right now.")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const jobs = await getWorkerJobs({ workerId })
            setWorkerJobs(jobs)
        } catch (err) {
            console.error("Failed to fetch worker jobs", err)
            setError("We couldn't load your job matches. Please try again.")
        } finally {
            setLoading(false)
        }
    }, [workerId])

    useEffect(() => {
        fetchWorkerJobs()
    }, [fetchWorkerJobs])

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-full p-12">
                <Text variant="title">Loading job matches…</Text>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center w-full h-full p-12 gap-4">
            <Text variant="title">{error}</Text>
                <Button onClick={fetchWorkerJobs}>
                    Try Again
                </Button>
            </div>
        )
    }

    if (workerJobs?.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-full p-12">
                <Text variant="title">
                    No job matches available right now.
                </Text>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-6 px-4 p-6">
            {workerJobs?.map(job => (
                <JobCard key={job.jobId} workerId={workerId} job={job} />
            ))}
        </div>
    )
}

export default JobMatches;