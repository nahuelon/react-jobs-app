import { call, put, takeEvery } from 'redux-saga/effects'
import { Job, AddJobAction, RemoveJobAction, MarkJobAction, JOBS_ERROR } from './jobsTypes'
import firebase from '../../services/firebase'

const addJobToDb = async (job: Job) => {
}

function* addJob(action: AddJobAction) {
}

export default function* authSaga() {
  yield takeEvery("JOBS_ADD_JOB", addJob);
}

