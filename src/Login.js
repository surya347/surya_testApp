import React,{ useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmail =  (e) => {
    setEmail(e.target.value);
    // console.log("email:"+JSON.stringify(email));
  }

  const handlePassword =  (e) => {
    setPassword(e.target.value);
    // console.log("password:"+JSON.stringify(password));

  }

    const handleLogin = (e) =>{
        e.preventDefault();
    console.log("email:"+JSON.stringify(email));
    console.log("password:"+JSON.stringify(password));

    navigate('/product');
    }

  return (
    <>
    <div className="login">
    <div className="form">
        <form className="login-form">
        <span className="material-icons">lock</span>
        <input type="text"
               placeholder="email" 
               name="email"
               value={email}
               onChange={handleEmail}
               required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" 
               placeholder="password"
               name="password"
               value={password} 
               onChange={handlePassword}
               required />

        <button onClick={handleLogin}>login</button>
        </form>  
    </div>
    </div>
    </>
  )
}

export default Login;