import { AuthState, AuthActionTypes, AUTH_SIGN_IN, AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SET_USER, AUTH_ERROR } from './authTypes'

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: ''
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  console.log(action.type)
  switch (action.type) {
    case AUTH_SIGN_IN:
      return { ...state, isLoading: true }
    case AUTH_SIGN_UP:
      return { ...state, isLoading: true }
    case AUTH_SIGN_OUT:
      return { ...state, isLoading: true }
    case AUTH_SET_USER:
      return { ...state, isLoading: false, user: action.payload }
    case AUTH_ERROR:
      return { ...state, isLoading: false, user: null, error: action.payload }
    default :
      return state
    
  }
}

export default authReducer
