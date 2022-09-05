import React,{useState,useContext,createContext} from 'react'
import AuthContext from '../context/AuthContext';


const   AdminContext = createContext()
export default AdminContext

export const AdminProvider = ({children})=>{

    let [company,setCompany]=useState([])
    let {authTokens} = useContext(AuthContext)
    
    let [ user,setUser] = useState([])
    let getuser = async ()=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch('http://127.0.0.1:8000/base/admins/getusers/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('mmmm')
        if (response.status === 200){
           
           setUser(data)
           console.log('ffg')
          
        }else{
            
        }
        
    }

    
    let Blockuser = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/blockuser/${id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'is_active':'false'})
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('mmmm')
        if (response.status === 200){
           console.log('ffg')
           getuser()
        }else{
            alert('Invalid Credentials')
        }
        
    }

    let unBlockuser = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/unblockuser/${id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'is_active':'True'})
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('nnnn')
        if (response.status === 200){
           console.log('jjj')
           getuser()
        }else{
            alert('Invalid Credentials')
        }
        
    }

    let home_reg = async ()=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch('http://127.0.0.1:8000/base/admins/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        
        let data= await response.json()
        
        console.log(data)
        console.log('mmmm')
        if (response.status === 200){
           setCompany(data)
           home_reg()
           console.log('ffg'+company)
        }else{
            
        }
        
    }
    

    let[adminList,setAdminList]=useState([])
    let admin_view = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/admindetail/${id}/`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        let data = await response.json()
        console.log(data)

        if (response.status === 200){
           setAdminList(data)
           console.log(id)
        }else{
            alert('Something went wrong')
        }
        
    }
    let[editList,setEditList]=useState([])
    let handlePending = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/editdetail/${id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'status':'approved'})
        })
        let data = await response.json()
        console.log(data)

        if (response.status === 200){
           setEditList(data)
           console.log(id)
        }else{
            alert('Something went wrong')
        }
        
    }
    let[rejectList,setRejectList]=useState([])
    let handleRejection = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/editdetail/${id}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            body:JSON.stringify({'status':'rejected'})
        })
        let data = await response.json()
        console.log(data)

        if (response.status === 200){
           setRejectList(data)
           console.log(id)
        }else{
            alert('Something went wrong')
        }
        
    }
    let[deleteList,setDeleteList]=useState([])
    let handleDeletion = async (id)=>{
        // e.preventDefault()
        console.log("Form submitted")
        let response = await fetch(`http://127.0.0.1:8000/base/admins/deletedetail/${id}/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer  ' +String(authTokens.access)
            },
            
        })
        let data = await response.json()
        console.log(data)

        if (response.status === 200){
            setDeleteList(data)
           console.log(id)
        }else{
            alert('Something went wrong')
        }
        
    }
    
    let contextData = {
       home_reg : home_reg,
       company : company,
       admin_view : admin_view,
       adminList : adminList,
       handlePending : handlePending,
       editList : editList,
       handleRejection : handleRejection,
       rejectList : rejectList,
       handleDeletion : handleDeletion,
       deleteList : deleteList,
       user : user,
       getuser : getuser,
       Blockuser : Blockuser,
       unBlockuser : unBlockuser,
              
    }
  return (
    <div>
      <AdminContext.Provider value={contextData} >
            {children}
        </AdminContext.Provider>
    </div>
  )
}


