import api from "./axios";
import type {
    getWorkerProfileParams,
    getWorkerJobParams,
    JobResponseParams
} from "../types/types";

const getWorkerProfile = async ({ workerId }: getWorkerProfileParams) => {
    try {
        const res = await api.get(`/worker/${workerId}/profile`)
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const getWorkerJobs = async ({ workerId }: getWorkerJobParams) => {
    try {
        const res = await api.get(`/worker/${workerId}/matches`)
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const acceptJob = async ({ workerId, jobId }: JobResponseParams) => {
    try {
        const res = await api.get(`/worker/${workerId}/job/${jobId}/accept`)
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const rejectJob = async ({ workerId, jobId }: JobResponseParams) => {
    try {
        const res = await api.get(`/worker/${workerId}/job/${jobId}/reject`)
        return res.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export { getWorkerProfile, getWorkerJobs, acceptJob, rejectJob }