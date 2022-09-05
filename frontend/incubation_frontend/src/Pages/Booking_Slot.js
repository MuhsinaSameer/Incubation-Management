import React from 'react'
import Sidebar from '../components/Sidebar'
import AdminNav from '../components/AdminNav'
import {Row,Col} from 'react-bootstrap'
import BookSlot from '../components/BookSlot'

function Booking_Slot() {
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
        <BookSlot/>
        </Col>
        </Row>
      </div>
    )
  }

export default Booking_Slot
