import React,{useState,useContext,createContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext';

const   SlotContext = createContext()
export default SlotContext

export const SlotProvider = ({children})=>{
  
    let[slot,setSlot] = useState([])
    let {authTokens} = useContext(AuthContext)

    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleNumber = () => {
        setNumber(true);
    }

    let handleSlot = async ()=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch('http://127.0.0.1:8000/base/admins/bookingslot/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        
        let data= await response.json()
        
        // console.log(data)
        console.log('mmmkyutguigiugm')
        if (response.status === 200){
            console.log("yesss")
            console.log(data)
            setSlot(data)
         
        }else{
            
        }
        
    }
    let [state,setState]=useState([])
    let approveapp= async ()=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch('http://127.0.0.1:8000/base/admins/approvedetail/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        
        let data= await response.json()
        
        // console.log(data)
        console.log('mmmm')
        if (response.status === 200){
            setState(data)
            console.log(data)
         
        }else{
            
        }
        
    }

    
    let handleSlotChange = async (number,key)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/approvedslot/${number}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'Active':'True','registration':key})
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('mmmm')
        if (response.status === 200){
           console.log('ffg')
        }else{
            
        }
        
    }


    let handleActiveSlot = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/editslot/${id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'activeslot':'True'})
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('mmmm')
        if (response.status === 200){
           console.log('ffg')
        }else{
            
        }
        
    }
    let contextData = {
        handleSlot : handleSlot,
        slot : slot,
        handleSlotChange : handleSlotChange,
        approveapp : approveapp,
        state : state,
        handleActiveSlot : handleActiveSlot,
       
    }
    
  return (
    <div>
      <SlotContext.Provider value={contextData} >
            {children}
        </SlotContext.Provider>
    </div>
  )


}
