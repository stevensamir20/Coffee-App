import React, { useRef } from 'react'
import axios from 'axios'
import { BaseURL } from '../../shared/API'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const userRef = useRef();
    const pwdRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post((BaseURL + 'auth/signup'), {
            username: userRef.current.value,
            password: pwdRef.current.value,
            role: "CUSTOMER",
            customer: {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value
            }
        })
        .then((res) => {
            authContext.login(res.data.token)
            navigate(-1)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
  return (
    <div className="auth-form-container">   
        <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="fisrt name" className="form-label"></label>
            <input  className="form-input" ref={firstNameRef} name="fname" id="fname" placeholder="First Name" />
            <label htmlFor="last name" className="form-label"></label>
            <input className="form-input" ref={lastNameRef} name="name" id="name" placeholder="Last Name" />
            <label htmlFor="text" className="form-label"></label>
            <input className="form-input" ref={userRef} type="text" placeholder="Username" id="username" name="username" required minLength={3}/>
            <label htmlFor="password" className="form-label"></label>
            <input className="form-input" ref={pwdRef} type="password" placeholder="Password" id="password" name="password" minLength={8} required/>
            <button className="log-btn">SIGN UP</button>
        </form>
    </div>
    )
}