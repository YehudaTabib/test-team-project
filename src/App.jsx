import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import SignUp from './components/SignUp.jsx';
import Welcome from './components/Welcome.jsx';
import './style/App.css'; // Assuming you have some styles in App.css

export default function App() {
  
  const [users, setUsers] = useState([]); 
  const [carrentUser, setCurrentUser] = useState(null);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp users={users} setUsers={setUsers} setCurrentUser={setCurrentUser}/>} />
          <Route path="/welcome" element={<Welcome carrentUser={carrentUser}/>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
