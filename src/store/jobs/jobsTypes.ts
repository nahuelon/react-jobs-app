export const JOBS_ADD_JOB = 'JOBS_ADD_JOB'
export const JOBS_REMOVE_JOB = 'JOBS_REMOVE_JOB'
export const JOBS_MARK_WITH_FEEDBACK = 'JOBS_MARK_WITH_FEEDBACK'
export const JOBS_ERROR = 'JOBS_ERROR'

// types definitions
export interface Job {
  id: string;
  position: string;
  company: string;
  salary: number;
  createdAt: number;
  withFeedback: boolean;
}

// types definition for the state
export interface JobsState {
  isLoading: boolean;
  jobs: Job[];
  error: string;
}

// types definitions for the actions
export interface AddJobAction {
  type: typeof JOBS_ADD_JOB;
  payload: Job;
}

export interface RemoveJobAction {
  type: typeof JOBS_REMOVE_JOB;
  payload: number;
}

export interface MarkJobAction {
  type: typeof JOBS_MARK_WITH_FEEDBACK;
  payload: number;
}

// I use a separated action to set the error in jobs tasks
interface JobErrorAction {
  type: typeof JOBS_ERROR;
  payload: string;
}

export type JobsActionTypes = AddJobAction | RemoveJobAction | MarkJobAction | JobErrorAction
