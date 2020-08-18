import { JobsState, JobsActionTypes, JOBS_ADD_JOB, JOBS_REMOVE_JOB, JOBS_MARK_WITH_FEEDBACK, JOBS_ERROR } from './jobsTypes'

const initialState: JobsState = {
  isLoading: false,
  jobs: [],
  error: ''
}

const jobsReducer = (state = initialState, action: JobsActionTypes): JobsState => {
  console.log(action.type)
  switch (action.type) {
    case JOBS_ADD_JOB:
      return { ...state, isLoading: true }
    case JOBS_REMOVE_JOB:
      return { ...state, isLoading: true }
    case JOBS_MARK_WITH_FEEDBACK:
      return { ...state, isLoading: true }
    case JOBS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    default :
      return state
  }
}

export default jobsReducer
