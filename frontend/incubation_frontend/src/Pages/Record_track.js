import React from 'react'
import Sidebar from '../components/Sidebar'
import AdminNav from '../components/AdminNav'
import {Row,Col} from 'react-bootstrap'
import RecordTrack from '../components/RecordTrack'

function Record_track() {
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
      <RecordTrack/>
      </Col>
      </Row>
    </div>
  )
}

export default Record_track
