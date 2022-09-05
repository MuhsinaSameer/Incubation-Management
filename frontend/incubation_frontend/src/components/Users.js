import React, { useContext, useEffect } from 'react'
import AdminContext from '../context/AdminContext'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Users() {
    let {user,getuser,Blockuser,unBlockuser} = useContext(AdminContext)

    useEffect(()=>{
        getuser()
    },[])

  return (
    <div>
       <h2 style={{textAlign:'center'}}>Users List</h2>
    <Table striped bordered hover variant="light" className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>
      { user.map((obj,index)=>
         <tr>   

        <td>{index+1}</td>
        <td>{obj.name}</td>
        <td>{obj.username}</td>
        <td>{obj.email}</td>
      {obj.is_active ?
           <td><Button type='submit' variant="danger" onClick={()=>   Blockuser(obj.id) }>Block</Button></td>:
         <td><Button type='submit' variant="success" onClick={()=>unBlockuser(obj.id)}>Active</Button></td> }

      </tr> 
        )} 
      </tbody>
    </Table>
    </div>
  )
}

export default Users
