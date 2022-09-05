import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div >
        <ListGroup className='mt-5' style={{'backgroundColor':'black','height':'100vh'}}>
        <Link to="/user"style={{'backgroundColor':'black','color':'white','fontSize':'25px','textDecoration': 'none'}} >Users</Link><br></br>
        <Link to="/adminhome"style={{'backgroundColor':'black','color':'white','fontSize':'25px','textDecoration': 'none'}} >Applicant List</Link><br></br>
        <Link to="/recordtrack" style={{'backgroundColor':'black','color':'white','fontSize':'25px','textDecoration': 'none'}} >Record Track</Link><br></br>
        <Link to="/bookingslot" style={{'backgroundColor':'black','color':'white','fontSize':'25px','textDecoration': 'none'}} >Booking Slots</Link><br></br>
        {/* <Link to="/logout" style={{'backgroundColor':'black','color':'white','fontSize':'25px','textDecoration': 'none'}} >Logout</Link><br></br> */}
        </ListGroup>
    </div>
  )
}

export default Sidebar

