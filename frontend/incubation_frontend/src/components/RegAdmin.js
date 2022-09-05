import React,{useContext, useEffect} from 'react'
import AdminContext from '../context/AdminContext'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RegAdmin() {
    console.log('1111111111111')
    let {company,home_reg,handlePending,handleRejection,handleDeletion} = useContext(AdminContext)
    console.log('222222')
    let navigate = useNavigate()
    let table1=0
    let table2=0
   useEffect(()=>{
    home_reg()
   },[])
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Pending Applications</h2>
    <Table striped bordered hover variant="light" className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Company Description</th>
          <th></th>
          <th>Status</th>
          <th>Rejected</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      { company.map((obj,index)=>
        obj.status==='pending' ?  <tr>   

        <td>{table1=table1+1}</td>
        <td>{obj.company_name}</td>
        <td>{obj.company_description}</td>
        <td><button onClick={()=>navigate(`/adminview/${obj.id}/`)}>Open</button></td>
        <td><button onClick={()=>handlePending(obj.id)}>Pending</button></td>
        <td><button onClick={()=>handleRejection(obj.id)}>Rejected</button></td>
        <td><button onClick={()=>handleDeletion(obj.id)}>Delete</button></td>
        
      </tr> :""
        )} 
      </tbody>
    </Table>
    <h2 style={{textAlign:'center'}}>Approved Applications</h2>
    <Table striped bordered hover variant="light" className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Company Description</th>
          <th></th>
          <th>Status</th>
          <th>Rejected</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      { company.map((obj,index)=>
         obj.status==='approved' ? 
        <tr>   
        <td>{table2=table2+1}</td>
        <td>{obj.company_name}</td>
        <td>{obj.company_description}</td>
        <td><button onClick={()=>navigate(`/adminview/${obj.id}/`)}>Open</button></td>
        <td><button>{obj.status}</button></td>
        <td><button onClick={()=>handleRejection(obj.id)}>Rejected</button></td>
        <td><button onClick={()=>handleDeletion(obj.id)}>Delete</button></td>
        
      </tr> :""
        )} 
      </tbody>
    </Table>
    
    </div>

  )
}

export default RegAdmin
