// import {useState} from "react";

// export default function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   async function register(ev) {
//     ev.preventDefault();
//     const response = await fetch('http://localhost:4000/register', {
//       method: 'POST',
//       body: JSON.stringify({username,password}),
//       headers: {'Content-Type':'application/json'},
//     });
//     if (response.status === 200) {
//       alert('registration successful');
//     } else {
//       alert('registration failed');
//     }
//   }
//   return (
//     <form className="register" onSubmit={register}>
//       <h1>Register</h1>
//       <input type="text"
//              placeholder="username"
//              value={username}
//              onChange={ev => setUsername(ev.target.value)}/>
//       <input type="password"
//              placeholder="password"
//              value={password}
//              onChange={ev => setPassword(ev.target.value)}/>
//       <button>Register</button>
//     </form>
//   );
// }

import React, { useState } from "react";
import './RegisterPage.css';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  }

  return (
    <form className="register-form" onSubmit={register}>
      <h1 className="register-heading">Register</h1>
      <input
        type="text"
        className="register-input"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        className="register-input"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button className="register-button">Register</button>
    </form>
  );
}