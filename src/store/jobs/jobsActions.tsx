import { Job, JOBS_ADD_JOB, JOBS_REMOVE_JOB, JOBS_MARK_WITH_FEEDBACK, JobsActionTypes, JOBS_ERROR } from './jobsTypes'

// actions
export function addJob(job: Job): JobsActionTypes {
  return {
    type: JOBS_ADD_JOB,
    payload: job
  }
}

export function removeJob(id: number): JobsActionTypes {
  return {
    type: JOBS_REMOVE_JOB,
    payload: id
  }
}

export function markJob(id: number): JobsActionTypes {
  return {
    type: JOBS_MARK_WITH_FEEDBACK,
    payload: id
  }
}

export function jobsSetError(error: string): JobsActionTypes {
  return {
    type: JOBS_ERROR,
    payload: error
  }
}
