import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { authSignIn, authSignUp } from '../store/auth/authActions'
import { ApplicationState } from '../store'

const SignForm = ( { formType }: { formType: string } ) => {

  const [user, setUser] = useState({ uid: '', email: '', password: '', displayName: ''})

  const isLoading = useSelector((state: ApplicationState) => state.auth.isLoading)

  const dispatch = useDispatch()

  const handleOnChange = ( (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
        ...user,
        [event.target.id]: event.target.value
    });
  })

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (isLoading) return

    if (formType === 'signup') {
      dispatch(authSignUp(user))
    } else if (formType === 'signin') {
      dispatch(authSignIn(user))
    }
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" 
            className="form-control" 
            id="email" value={user.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" 
                className="form-control" 
                id="password" value={user.password}
                placeholder="Password"
                onChange={handleOnChange}
            />
        </div>
        { formType === 'signup' && 
        <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Display Name</label>
            <input type="text" 
                className="form-control" 
                id="displayName"
                placeholder="Display Name"
                onChange={handleOnChange}
            />
        </div>
        }
        <Button 
          type="submit"
          disabled={isLoading}
          variant={(formType === 'signin') ? 'success' : 'primary'}
          className="btn btn-primary"
          onClick={handleSubmit}
          >
          { (!isLoading) ? 
            (formType === 'signin') ? 'Sign In' : 'Sign Up'
          : 'Loading...'
          }
        </Button>
      </form>
    </div>
  )
}

export default SignForm
