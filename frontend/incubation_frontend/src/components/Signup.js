import React,{ useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import AuthContext from '../context/AuthContext';

function Signup() {
  let {signUpUser} = useContext(AuthContext)
  return (
    <div>
    <Row className="justify-content-center" >
        <Col lg={3} >
        <Form onSubmit={signUpUser}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" name='name' placeholder="Enter name" />  
  </Form.Group>         
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" />  
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
    
export default Signup