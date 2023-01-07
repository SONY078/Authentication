import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const configuration = {
        method: "post",
        url: "https://loginauth0.onrender.com/login",
        data: {
          email,
          password,
        },
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
        navigate('/register')
      
      }

  return (
    <div>
        <div>
            
            <form id='login-container' onSubmit={(e)=>handleSubmit(e)}>
            <h1 id='login'>login page</h1>
            <label htmlFor="Email id">Email:&emsp;</label>
            <input type="email"
            name="email"
            value={email}
            placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}
            /><br/><br /><br />
            <label htmlFor="">Password:</label>
            <input type="password" name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            /><br /><br /><br />
             {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

            <button onClick={(e) => handleSubmit(e)}>submit</button>
            </form>
        </div>
        <div id="logincred">
        <p>login credentials: </p>
        <p>email:arju@egmail.com</p>
        <p>password:00@1234</p>
        </div>
    </div>
  )
}

export default Login

