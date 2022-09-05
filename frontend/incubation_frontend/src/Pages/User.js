import React from 'react'
import Sidebar from '../components/Sidebar'
import AdminNav from '../components/AdminNav'
import {Row,Col} from 'react-bootstrap'
import BookSlot from '../components/BookSlot'
import Users from '../components/Users'

function User() {
  return (
    <div>
       <Row>
        <AdminNav/>
      </Row>
      <Row>
        <Col lg={2}>
      <Sidebar/>
      </Col>
      <Col lg={10}>
      <Users/>
      </Col>
      </Row>
    </div>
  )
}

export default User
