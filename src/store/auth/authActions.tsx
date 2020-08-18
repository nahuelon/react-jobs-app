import { User, AUTH_SIGN_IN, AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SET_USER, AuthActionTypes, AUTH_ERROR } from './authTypes'

// actions
export function authSignIn(user: User): AuthActionTypes {
  return {
    type: AUTH_SIGN_IN,
    payload: user
  }
}

export function authSignUp(user: User): AuthActionTypes {
  return {
    type: AUTH_SIGN_UP,
    payload: user
  }
}

export function authSignOut(): AuthActionTypes {
  return {
    type: AUTH_SIGN_OUT
  }
}

export function authSetUser(user: User): AuthActionTypes {
  return {
    type: AUTH_SET_USER,
    payload: user
  }
}

export function authSetError(error: string): AuthActionTypes {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
