import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ApplicationState } from '../store'
import { authSignOut } from '../store/auth/authActions'

const NavbarComponent : React.FC = () => {

  const user = useSelector((state: ApplicationState) => state.auth.user)

  const dispatch = useDispatch()

  const signOutHandler = (event: React.MouseEvent) => { dispatch(authSignOut()) }

  return ( 
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/jobs">Nahuel's Jobs List</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        { user ? (
          <Nav.Link as={Link} to="/jobs"><Button variant="warning">Show {(user && user.displayName) ? `${user.displayName}'s` : `User's` } Jobs List</Button></Nav.Link>
        ) : null }
        </Nav>
        <Nav>
          { !user ? (
            <div className="container">
              <Nav.Link as={Link} to="/signin"><Button variant="success">Sign In</Button></Nav.Link>
              <Nav.Link as={Link} to="/signup"><Button variant="primary">Sign Up</Button></Nav.Link>
            </div>
          ) : (
            <Button variant="danger" onClick={signOutHandler}>Sign Out</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent