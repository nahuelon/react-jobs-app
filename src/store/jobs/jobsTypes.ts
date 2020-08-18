export const JOBS_GET_JOBS = 'JOBS_GET_JOBS'
export const JOBS_SET_JOBS = 'JOBS_SET_JOBS'
export const JOBS_ADD_JOB = 'JOBS_ADD_JOB'
export const JOBS_REMOVE_JOB = 'JOBS_REMOVE_JOB'
export const JOBS_MARK_WITH_FEEDBACK = 'JOBS_MARK_WITH_FEEDBACK'
export const JOBS_ADDED_JOB = 'JOBS_ADDED_JOB'
export const JOBS_REMOVED_JOB = 'JOBS_REMOVED_JOB'
export const JOBS_MARKED_WITH_FEEDBACK = 'JOBS_MARKED_WITH_FEEDBACK'
export const JOBS_ERROR = 'JOBS_ERROR'

// types definitions
export interface Job {
  id: string;
  position: string;
  company: string;
  salary: number;
  uid: string;
  withFeedback: boolean;
}

// types definition for the state
export interface JobsState {
  isLoading: boolean;
  jobs: Job[];
  error: string;
}

// types definitions for the actions
export interface GetJobsAction {
  type: typeof JOBS_GET_JOBS;
}

export interface SetJobsAction {
  type: typeof JOBS_SET_JOBS;
  payload: Job[];
}

export interface AddJobAction {
  type: typeof JOBS_ADD_JOB;
  payload: Job;
}

export interface AddedJobAction {
  type: typeof JOBS_ADDED_JOB;
  payload: Job;
}

export interface RemoveJobAction {
  type: typeof JOBS_REMOVE_JOB;
  payload: string;
}

export interface RemovedJobAction {
  type: typeof JOBS_REMOVED_JOB;
  payload: string;
}

export interface MarkJobAction {
  type: typeof JOBS_MARK_WITH_FEEDBACK;
  payload: string;
}

export interface MarkedJobAction {
  type: typeof JOBS_MARKED_WITH_FEEDBACK;
  payload: string;
}

// I use a separated action to set the error in jobs tasks
interface JobErrorAction {
  type: typeof JOBS_ERROR;
  payload: string;
}

export type JobsActionTypes = GetJobsAction | SetJobsAction | AddJobAction | RemoveJobAction | MarkJobAction | AddedJobAction | RemovedJobAction | MarkedJobAction | JobErrorAction
