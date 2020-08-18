import React, { useEffect, useState } from 'react';
import NavbarComponent from './components/Navbar'
import { Switch, Route, useHistory } from 'react-router-dom'
import SignForm from './components/SignForm'
import { useDispatch } from 'react-redux'
import firebase from './services/firebase'
import { authSetUser } from './store/auth/authActions'
import JobsList from './components/JobsList';


const App : React.FC = () => {
  const [ firebaseInitialized, setFirebaseInitialized ] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setFirebaseInitialized(true)
      if (user) {
        if (! user.displayName) {
          user.updateProfile({ displayName: user.email });
        }
        const currentUser = {
          uid: (user && user.uid) ? user.uid : '',
          email: (user && user.email) ? user.email : '',
          password: '',
          displayName: (user && user.displayName) ? user.displayName : ''
        }
        // I set the user to the store
        dispatch(authSetUser(currentUser))      
        history.push('/jobs')
      } else {
        history.push('/signin')
      }
    })
  }, [dispatch, history])

  return (
    <div className="container">
      <NavbarComponent />
      <Switch>
        <Route path="/signin">
          <SignForm formType={'signin'}></SignForm>
        </Route>
        <Route path="/signup">
          <SignForm formType={'signup'}></SignForm>
        </Route>
        <Route path="/jobs">
          <JobsList />
        </Route>
        <Route exact path="/">
          <h1>Welcom to the Jobs List App. { (firebaseInitialized) ? 'We are checking your credencials...' : '' } </h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
