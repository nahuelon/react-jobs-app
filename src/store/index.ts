import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from './auth/authReducer'
import jobsReducer from './jobs/jobsReducer'
import { AuthState } from './auth/authTypes'
import { JobsState } from './jobs/jobsTypes'
import rootSaga from './saga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ApplicationState {
  auth: AuthState;
  jobs: JobsState;
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
  jobs: jobsReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
