import About from "./Container/About";
import Profile from "./Container/Profile";
import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  const[state,setState] =useState('')

 
  return (
    <div>
      <button onClick={()=>setState('about')}>About</button>
      <button onClick={()=>setState('profile')}>Profile</button>
      <Router>
        <Route element={<About/>} path='/about' />
      </Router>
    </div>
  );
}

export default App;
