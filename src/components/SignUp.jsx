import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/SignUp.css'; // Assuming you have some styles in SignUp.css

export default function SignUp({ users, setUsers, setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const nav = useNavigate();

  function addUser() {
    if (email && password && userName) {
      const newUser = {
        email: email,
        password: password,
        userName: userName
      };

      const copyUsers = structuredClone(users);
      copyUsers.push(newUser);
      setUsers(copyUsers);

      console.log('User added:', newUser);

      // Reset fields
      setCurrentUser(newUser);
      setEmail('');
      setPassword('');
      setUserName('');
      nav('/welcome');
    } else {
      console.log('Please fill in all fields');
    }
  }

  return (
    <div className="signup-container">
    <h1>Welcome to the Sign Up Page</h1>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={addUser}>Register</button>
    </div>
  );
}
