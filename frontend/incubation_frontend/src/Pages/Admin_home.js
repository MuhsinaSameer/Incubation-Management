import React from 'react'
import AdminNav from '../components/AdminNav'
import RegAdmin from '../components/RegAdmin'
import Sidebar from '../components/Sidebar'
import {Row,Col} from 'react-bootstrap'

function Admin_home() {
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
      <RegAdmin/>
      </Col>
      </Row>
    </div>
  )
}

export default Admin_home
