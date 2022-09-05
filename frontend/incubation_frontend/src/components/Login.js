import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import AuthContext from '../context/AuthContext';

function Login() {
  let {user} = useContext(AuthContext)
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
        <Row className="justify-content-center" >
            <Col lg={3} >
            <Form onSubmit={loginUser}>
      
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
        <Form.Label>Email address</Form.Label>
        
       

        <Form.Control type="text" name='username' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
            </Col>
        </Row>
         
    </div>
  )
}

export default Login
