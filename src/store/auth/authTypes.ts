export const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
export const AUTH_SIGN_UP = 'AUTH_SIGN_UP'
export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT'
export const AUTH_SET_USER = 'AUTH_SET_USER'
export const AUTH_ERROR = 'AUTH_ERROR'

// types definitions
export interface User {
  uid: string | null;
  email: string;
  password: string;
  displayName: string;
}

// types definition for the state
export interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: string;
}

// types definitions for the actions
export interface SignInAction {
  type: typeof AUTH_SIGN_IN;
  payload: User;
}

export interface SignUpAction {
  type: typeof AUTH_SIGN_UP;
  payload: User;
}

export interface SignOutAction {
  type: typeof AUTH_SIGN_OUT;
}

// I use a separated action to set the user so I can show a 'loading' while the auth task is running
export interface AuthSetUserAction {
  type: typeof AUTH_SET_USER;
  payload: User;
}

// I use a separated action to set the error in signup or singin 
interface AuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: string;
}

export type AuthActionTypes = SignInAction | SignUpAction | SignOutAction | AuthSetUserAction | AuthErrorAction
