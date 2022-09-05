import React,{useState,useEffect} from 'react'

function Counter() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log('Mouting...');
    console.log('Updating...'+count);
  
  },[count])
 
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
         <h1>Hello I am Component {count}</h1>
    </div>
  )
}

export default Counter
