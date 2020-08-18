import { JobsState, JobsActionTypes, JOBS_GET_JOBS, JOBS_SET_JOBS, JOBS_ADD_JOB, JOBS_ADDED_JOB, JOBS_REMOVE_JOB, JOBS_REMOVED_JOB, JOBS_MARK_WITH_FEEDBACK, JOBS_ERROR } from './jobsTypes'

const initialState: JobsState = {
  isLoading: false,
  jobs: [],
  error: ''
}

const jobsReducer = (state = initialState, action: JobsActionTypes): JobsState => {
  console.log(action.type)
  switch (action.type) {
    case JOBS_GET_JOBS:
    case JOBS_ADD_JOB:
    case JOBS_REMOVE_JOB:
    case JOBS_MARK_WITH_FEEDBACK:
      return { ...state, isLoading: true }
    case JOBS_SET_JOBS:
      return { ...state, isLoading: false, jobs: action.payload }
    case JOBS_ADDED_JOB:
      return { ...state, isLoading: false, jobs: state.jobs.concat(action.payload) }
    case JOBS_REMOVED_JOB:
      return { ...state, isLoading: false, jobs: state.jobs.filter((job) => job.id !== action.payload) }
    case JOBS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    default :
      return state
  }
}

export default jobsReducer
