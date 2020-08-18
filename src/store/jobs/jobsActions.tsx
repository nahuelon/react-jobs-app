import { Job, JOBS_GET_JOBS, JOBS_SET_JOBS, JOBS_ADD_JOB, JOBS_ADDED_JOB, JOBS_REMOVE_JOB, JOBS_REMOVED_JOB, JOBS_MARK_WITH_FEEDBACK, JOBS_MARKED_WITH_FEEDBACK, JobsActionTypes, JOBS_ERROR } from './jobsTypes'

// actions
export function getJobs(): JobsActionTypes {
  return {
    type: JOBS_GET_JOBS,
  }
}

export function setJobs(jobs: Job[]): JobsActionTypes {
  return {
    type: JOBS_SET_JOBS,
    payload: jobs
  }
}

export function addJob(job: Job): JobsActionTypes {
  return {
    type: JOBS_ADD_JOB,
    payload: job
  }
}

export function removeJob(id: string): JobsActionTypes {
  return {
    type: JOBS_REMOVE_JOB,
    payload: id
  }
}

export function markJob(id: string): JobsActionTypes {
  return {
    type: JOBS_MARK_WITH_FEEDBACK,
    payload: id
  }
}

export function addedJob(job: Job): JobsActionTypes {
  return {
    type: JOBS_ADDED_JOB,
    payload: job
  }
}

export function removedJob(id: string): JobsActionTypes {
  return {
    type: JOBS_REMOVED_JOB,
    payload: id
  }
}

export function markedJob(id: string): JobsActionTypes {
  return {
    type: JOBS_MARKED_WITH_FEEDBACK,
    payload: id
  }
}

export function jobsSetError(error: string): JobsActionTypes {
  return {
    type: JOBS_ERROR,
    payload: error
  }
}
