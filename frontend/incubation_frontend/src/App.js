import {  BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Admin_home from './Pages/Admin_home';
import Admin_view from './Pages/Admin_view';
import { AuthContext, AuthProvider } from './context/AuthContext'
import AdminContext, { AdminProvider } from './context/AdminContext';
import Record_track from './Pages/Record_track';
import {SlotProvider} from './context/SlotContext';
import Booking_Slot from './Pages/Booking_Slot';
import User from './Pages/User';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className='App'>
     <Router>
      <AuthProvider>
        <AdminProvider>
          <SlotProvider>
      <Routes>
      
      <Route element={<LoginPage/>} path="/login" />
      <Route element={<SignupPage/>} path="/signup" />

      <Route element={<PrivateRoute/>} path="/" exact>
      <Route element={<HomePage/>} path="/" exact />
      </Route>
      <Route element={<PrivateRoute/>} path="/adminhome">
      <Route element={<Admin_home/>} path="/adminhome" />
      </Route>
      <Route element={<PrivateRoute/>} path="/adminview/:id">
      <Route element={<Admin_view/>} path="/adminview/:id" />
      </Route>
      <Route element={<PrivateRoute/>} path="/recordtrack">
      <Route element={<Record_track/>} path="/recordtrack" />
      </Route>
      <Route element={<PrivateRoute/>} path="/bookingslot">
      <Route element={<Booking_Slot/>} path="/bookingslot" />
      </Route>
      <Route element={<PrivateRoute/>} path="/user">
      <Route element={<User/>} path="/user" />
      </Route>
      </Routes>
      </SlotProvider>
      </AdminProvider>
      </AuthProvider>
     </Router>
     
    </div>
  );
}

export default App;
