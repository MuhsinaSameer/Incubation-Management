import React, { useEffect,useContext } from 'react'
import AdminContext from '../context/AdminContext'
import { Table} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function AdminView() {
    let{adminList,admin_view} = useContext(AdminContext)
    const params = useParams()
    let obj = params.id
    console.log(obj)
    useEffect (()=>{
        console.log('0000000')
        admin_view(obj)
},[]) 

  return (
    <div>
      <Table striped bordered hover variant="light" className='mt-5'>
        <h2 style={{textAlign:'center'}}>Details</h2>
        <tbody>
        <tr>
            <th>Name</th>
            <td>{adminList.name}</td>
        </tr>
        <tr> 
          <th>Address</th>
          <td>{adminList.address}</td>
        </tr>

        <tr>
          <th>City</th>
          <td>{adminList.city}</td>
        </tr>

        <tr>
          <th>State</th>
          <td>{adminList.state}</td>
        </tr>   

        <tr>
          <th>Email</th>
          <td>{adminList.email}</td>
        </tr>             
       
        <tr>
          <th>Phone Number</th>
          <td>{adminList.phone_number}</td>
        </tr> 

        <tr>
          <th>Company Name</th>
          <td>{adminList.company_name}</td>
        </tr>   

        <tr>
          <th>Team Description</th>
          <td>{adminList.team_description}</td>
        </tr>

        <tr>
          <th>Product Decription</th>
          <td>{adminList.company_description}</td>
        </tr>

        <tr>
          <th>Problem Description</th>
          <td>{adminList.problem_description}</td>
        </tr>              
        
        <tr>
          <th>Status</th>
          <td>{adminList.pending}</td>
        </tr>
        </tbody> 
    </Table>
    </div>
  )
}

export default AdminView
