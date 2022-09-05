import React, { useContext, useEffect } from 'react'
import AdminContext from '../context/AdminContext'
import { Table ,ProgressBar } from 'react-bootstrap'

function RecordTrack() {
    let {company,home_reg} = useContext(AdminContext)
    let pr
    useEffect(()=>{
        home_reg()
    })
  return (
    <div>
       <Table striped bordered hover variant="light" className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Company Description</th>
          <th>Registration Status</th>
         
        </tr>
      </thead>
      <tbody>
      { company.map((obj,index)=>
       <tr>   

        <td>{index+1}</td>
        <td>{obj.company_name}</td>
        <td>{obj.company_description}</td>
        <td>


    <ProgressBar>
        {obj.status === 'rejected' ? pr=1:(obj.status === 'pending' ? pr=2:pr=3)}
        {pr>=1 &&<ProgressBar striped variant="danger" now={15} key={1} />}
        {pr>=2 &&<ProgressBar variant="warning" now={35} key={2} />}
        {pr>=3 &&<ProgressBar striped variant="success" now={50} key={3} />}
    </ProgressBar>
</td>
       
        
      </tr> 
        )} 
      </tbody>
    </Table>
    </div>
  )
}

export default RecordTrack
