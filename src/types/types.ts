export type SectionProps = {
  title: string
  children: React.ReactNode
}

export type getWorkerProfileParams = {
    workerId: string
}

export type getWorkerJobParams = {
    workerId: string
}

export type JobResponseParams = {
    workerId: string,
    jobId: string
}

export type WorkerProfile = {
    workerId: string
    firstName: string
    lastName: string
    email?: string
    phoneNumber?: string
    pictureUrl?: string
    address?: {
        formattedAddress?: string
        zoneId?: string
    }
    certificates?: string[]
    transportation?: string
    availability?: {
        title?: string
        date?: string
    }[]
}

export type Job = {
  jobId: string
  jobTitle: {
    name: string
    imageUrl: string
  }
  company: {
    name: string
    address: {
      formattedAddress: string
      zoneId: string
    }
    reportTo: {
      name: string
    }
  }
  branch: string
  branchPhoneNumber: string
  milesToTravel: number
  wagePerHourInCents: number
  requirements: string[]
  shifts: {
    startDate: string
    endDate: string
  }[]
}


