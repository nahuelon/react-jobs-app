import { all } from 'redux-saga/effects'
import authSaga from '../auth/authSaga'
import jobsSaga from '../jobs/jobsSaga'

const rootSaga = function* () {
  yield all([
    authSaga(),
    jobsSaga()
  ])
}

export default rootSaga