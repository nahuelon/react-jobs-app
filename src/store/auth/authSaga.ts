import { call, put, takeEvery } from 'redux-saga/effects'
import { User, SignInAction, SignUpAction, SignOutAction, AUTH_SET_USER, AUTH_ERROR } from './authTypes'
import firebase from '../../services/firebase'

const signIn = async (user: User) => {
  const res = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  const currentUser = {
    uid: (res.user && res.user.uid) ? res.user.uid : '',
    email: (res.user && res.user.email) ? res.user.email : '',
    password: '',
    displayName: (res.user && res.user.displayName) ? res.user.displayName : '',
  }
  return currentUser
}

const signUp = async (user: User) => {
  const res = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  await res.user?.updateProfile({ displayName: user.displayName })
  const currentUser = {
    uid: (res.user && res.user.uid) ? res.user.uid : '',
    email: (res.user && res.user.email) ? res.user.email : '',
    password: '',
    displayName: (res.user && res.user.displayName) ? res.user.displayName : '',
  }
  return currentUser
}

const signOut = async () => {
  await firebase.auth().signOut()
}

function* authSignIn(action: SignInAction) {
  try {
    const authUser = yield call(signIn, action.payload)
    const newAction = { type: AUTH_SET_USER, payload: authUser }
    yield put(newAction)
  } catch (error) {
    yield put({ type: AUTH_ERROR, payload: error})
  }
}

function* authSignUp(action: SignUpAction) {
  try {
    const registerUser = yield call(signUp, action.payload)
    const newAction = { type: AUTH_SET_USER, payload: registerUser }
    yield put(newAction)
  } catch (error) {
    yield put({ type: AUTH_ERROR, payload: error})
  }
}

function* authSignOut(action: SignOutAction) {
  try {
    yield call(signOut)
    const newAction = { type: AUTH_SET_USER, payload: null }
    yield put(newAction)
  } catch (error) {
    yield put({ type: AUTH_ERROR, payload: error})
  }
}

export default function* authSaga() {
  yield takeEvery("AUTH_SIGN_IN", authSignIn);
  yield takeEvery("AUTH_SIGN_UP", authSignUp);
  yield takeEvery("AUTH_SIGN_OUT", authSignOut);
}

