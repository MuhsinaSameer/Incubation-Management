import React from 'react'
import AdminView from '../components/AdminView'
import AdminNav from '../components/AdminNav'
import Sidebar from '../components/Sidebar'
import {Row,Col} from 'react-bootstrap'

function Admin_view() {
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
      <AdminView/>
      </Col>
      </Row>
    </div>
  )
}

export default Admin_view
