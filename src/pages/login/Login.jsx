import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BaseURL } from '../../shared/API'
import AuthContext from '../../store/auth-context';

export const Login = () => {

    const userRef = useRef()
    const pwdRef = useRef()
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post((BaseURL + 'auth/login'), {
            username: userRef.current.value,
            password: pwdRef.current.value
        })
        .then((res) => {
            console.log(res);
            authContext.login(res.data.token)
            navigate(-1)
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="auth-form-container">
        <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="username" className="form-label"></label>
            <input  className="form-input" ref={userRef} type="text" placeholder="Username" id="username" name="username" />
            <label htmlFor="password" className="form-label"></label>
            <input className="form-input" ref={pwdRef} type="password" placeholder="Password" id="password" name="password" />
            <button className="log-btn">SIGN IN</button>
            <a href="/" className="forget-pass">Forget Password</a>
        </form>
    </div>
  )
}
