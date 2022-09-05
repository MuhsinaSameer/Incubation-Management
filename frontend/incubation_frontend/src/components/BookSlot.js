import React, { useContext, useEffect,useState } from 'react'
import SlotContext from '../context/SlotContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BookSlot() {
    let{slot,handleSlot,handleSlotChange,state,approveapp,handleActiveSlot} = useContext(SlotContext)

   
    const [show, setShow] = useState(false);
    const handleClose = () => {
      handleSlot()
      setShow(false);}
    const handleShow = (id) => {
      setShow(true);
      approveapp()
      setNumber(id)
    }
    const [number,setNumber]=useState([])
    const[key,setKey]=useState([])
    const keyHolder=(id)=>{
      setKey(id)
      handleActiveSlot(id)
      

    }

    const setvalue=()=>{
      handleSlotChange(number,key)
    }
    useEffect(()=>{
        handleSlot()
    },[])

  return (
    <div>
    {
      slot.map((obj)=> 
  
    <>
    {obj.Active ?
    (<Button className='slot' style={{backgroundColor:'red', width:'120px',height:'120px',marginTop:'50px',margin:'50px'}} disabled>
      </Button> )
      : (<Button className='slot'  style={{backgroundColor:'green',width:'120px',height:'110px',marginTop:'50px',margin:'30px'}} onClick={()=>handleShow(obj.id)}> 
       </Button> )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {state.map((obj)=>
            obj.activeslot ? "" : <Dropdown.Item onClick={()=>keyHolder(obj.id)}>{obj.company_name}</Dropdown.Item>
            )}
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setvalue}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   </>
   )}

    </div>
  )
}

export default BookSlot
