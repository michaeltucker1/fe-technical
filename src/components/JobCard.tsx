import type { Job } from "../types/types"
import { formatDistance, formatHourlyRate } from "../utils/utils"
import { useCallback, useState } from "react";
import { acceptJob, rejectJob } from "../api/worker";
import { Text, Button, ShiftTable, Section } from "./components";

type JobCardProps = {
  workerId: string
  job: Job
}

const JobCard = ({ workerId, job }: JobCardProps) => {

  //Contains the success or error message for job accept/reject buttons
  const [error, setError] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // Handles job acceptance
  const acceptJobHandler = useCallback(async () => {
    try {
      setSubmitting(true)
      const res = await acceptJob({ workerId, jobId: job.jobId })

      if (!res.success) {
        setError(true)
        setMessage(res.message)
        return
      }

      setError(false)
      setMessage("You successfully accepted a job.")
    } catch (err) {
      setError(true)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }, [workerId, job.jobId])
  

  // Handles job rejection
  const rejectJobHandler = useCallback(async () => {
    try {
      setSubmitting(true)
      const res = await rejectJob({ workerId, jobId: job.jobId })

      if (!res.success) {
        setError(true)
        setMessage(res.message)
        return
      }

      setError(false)
      setMessage("You successfully rejected a job.")
    } catch (err) {
      setError(true)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }

  }, [workerId, job.jobId])

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* Job Image */}
      <div className="h-44 w-full">
        <img
          src={job.jobTitle.imageUrl}
          alt={job.jobTitle.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Job Title and Company */}
      <div className="p-4 space-y-4">
        <div>
          <Text variant="title">{job.jobTitle.name}</Text>
          <Text tone="muted">{job.company.name}</Text>
        </div>

        {/* Distance and Rate */}
        <div className="flex justify-between items-center bg-emerald-400 text-white rounded-lg px-4 py-3">
          <div>
            <Text variant="caption" className="text-white">Distance</Text>
            <Text variant="title" className="text-white">
              {job.milesToTravel ? formatDistance(job.milesToTravel) : "Not determined"}
            </Text>
          </div>

          <div className="text-right">
            <Text variant="caption" className="text-white">Hourly Rate</Text>
            <Text variant="title" className="text-white">
              {job.wagePerHourInCents ? formatHourlyRate(job.wagePerHourInCents) : "Wage not determined"}
            </Text>
          </div>
        </div>

        {/* Shifts */}
        {job.shifts && <div className="text-sm text-gray-700">
          <ShiftTable shifts={job.shifts}/>
        </div>}
    

        {/* Location */}
        {job.company.address && 
          <Section title="Location">
            <Text variant="body">{job.company.address.formattedAddress}</Text>
          </Section>
        }

        {job.requirements && job.requirements.length > 0 && (
          <Section title="Requirements">
            <ul className="list-disc space-y-1 ml-4">
              {job.requirements.map((req, index) => (
                <li key={index}>
                  <Text variant="body">{req}</Text>
                </li>
              ))}
            </ul>
          </Section>
        )}
        
        {/* Report To */}
        {job.company.reportTo && 
          <Section title="Report To">
            <Text variant="body">{job.company.reportTo.name}</Text>
          </Section>
        }


        {/* Accept or Reject a job */}
        <div className="flex flex-col gap-1 pt-2 w-full">
          {message && (
            <Text variant="body" tone={error ? "error" : "success"}>{message}</Text>
          )}
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={rejectJobHandler} disabled={submitting}>No Thanks</Button>
            <Button variant="primary" className="flex-1" onClick={acceptJobHandler} disabled={submitting}>I'll Take It</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
