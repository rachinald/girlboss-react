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

  const [ id, setId ] = useState(null);


  return (
    
    
      <Router>

        
        
        <nav>
          <ul>
            <li>
              <Link to="/"><a href="" class="middle">Home</a></Link>
            </li>
            <li>
              <Link to="/register"><a href="" class="middle">Register</a></Link>
            </li>
            <img src={Logo} className="logo"></img>
            <li>
              <Link to="/login"><a href="" class="middle">Login</a></Link>
            </li>
            <li>
              <Link to="/profile"><a href="" class="middle">Profile</a></Link>
            </li>
          </ul>

          
          
        </nav>
        
      <Routes>

          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login user={user} setUser={setUser} /> } />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile user={user} setUser={setUser}/>} />
          <Route path='/artist' element={<Artist id={id} setId={setId} />} />

          
      </Routes>
      
      </Router>
   
    
  )
}

export default App;
