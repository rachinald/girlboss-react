import "./App.css";
import { useState } from "react";


import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Artist from "./components/Artist";
import Login from "./components/Login";

import Logo from "./assets/girlboss-collective-text.png";

import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";

// Switch is now Routes

function App() {
  const [ user, setUser ] = useState(null);




  return (
    
    
      <Router>

        
        
        <nav>
          <ul>
            <li>
              <Link to="" className="middle">Home</Link>
            </li>
            <li>
              <Link to="/register" className="middle">Register</Link>
            </li>
            <img src={Logo} className="logo" alt="logo" />
            <li>
              <Link to="/login" className="middle">Login</Link>
            </li>
            <li>
              <Link to="/profile" className="middle">Profile</Link>
            </li>
          </ul>
          
        </nav>
  
      <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/login' element={<Login user={user} setUser={setUser} /> } />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile user={user} setUser={setUser}/>} />
          <Route path='/artist' element={<Artist/>} />
          
          
      </Routes>
      
      </Router>
   
    
  )
}

export default App;
