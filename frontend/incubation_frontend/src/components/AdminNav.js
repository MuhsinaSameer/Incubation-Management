import React, {useContext}from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


function AdminNav() {
  let {user,logoutUser} = useContext(AuthContext)
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-3">
            
            {user ? (
              <p style={{'cursor':'pointer','marginTop':'20px'}} onClick={logoutUser}>LogOut</p>
            ):
            <Link to="/login" style={{'textDecoration':'none'}}>LogIn</Link>}
          </Nav>
          <Nav className="me-3">
            
            <Link  style={{'textDecoration':'none','color':'black'}} to="/signup">SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AdminNav
