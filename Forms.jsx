import React from 'react'
import { useState } from 'react';

const Forms = () => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });
    const [submit, setsubmit] = useState(' ');
    console.log(userInfo, "yes");

    const {username, password} = userInfo;

    const handleUserName = ({target : {value}}) => {
    console.log(value, "Event");
    setUserInfo({...userInfo, username: value});
    };

    const handlePassword = ({target : {value}}) => {
    console.log(value, "Event");
    setUserInfo({...userInfo, password: value});
    };

        const handleSubmit = () => {
          {username !== "" && password !== ""
            ? alert('Data Submited')
            : alert('Cannot Be Empty');
        }
    };

  return (
    <div>
      <h2>Login</h2>
      <form>
       <label>User Name</label>
       <input type="text" id="user_input" placeholder="Username" value={username} onChange = {handleUserName}/>
       <br/>
       <label>Password</label>
       <input type="password" id="password" placeholder="Password" value={password} onChange = {handlePassword}/>
      </form>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Forms;
