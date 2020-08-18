import { call, put, takeEvery } from 'redux-saga/effects'
import { Job, GetJobsAction, AddJobAction, JOBS_ERROR, JOBS_SET_JOBS, JOBS_ADDED_JOB } from './jobsTypes'
import firebase from '../../services/firebase'

const getJobFromDb = async () => {
  const user = firebase.auth().currentUser
  const snapshot = await firebase.firestore().collection('jobs').where("uid", "==", (user) ? user.uid : '').get()
  return snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      position: data.position,
      company: data.company,
      salary: data.salary,
      uid: data.uid,
      withFeedback: data.withFeedback
    }
  })
}

const addJobToDb = async (job: Job) => {
  const user = firebase.auth().currentUser
  await firebase.firestore().collection("jobs").add({ ...job, uid: (user) ? user.uid : '', createAt: new Date() })
}

function* getJobs(action: GetJobsAction) {
  try {
    const jobs = yield call(getJobFromDb)
    yield put({ type: JOBS_SET_JOBS, payload: jobs })
  } catch (error) {
    yield put({ type: JOBS_ERROR, payload: error})
  }
}

function* addJob(action: AddJobAction) {
  try {
    yield call(addJobToDb, action.payload)
    yield put({ type: JOBS_ADDED_JOB, payload: action.payload })
  } catch (error) {
    console.error(error)
    yield put({ type: JOBS_ERROR, payload: error})
  }
}

export default function* authSaga() {
  yield takeEvery("JOBS_GET_JOBS", getJobs);
  yield takeEvery("JOBS_ADD_JOB", addJob);
}

