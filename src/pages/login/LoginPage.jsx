import React, { useState} from 'react'
import { Login } from './Login';
import { Register } from './Register';

export const LoginPage = () => {

  const [reg, setReg] =useState(false);

  return (
    <>
      <div className='form-controller'>
        <div className="form-controller-btns">
          <button 
            className={!reg ? 'form-btn-active' : 'form-btn-disabled'}
            onClick={() => {setReg(!reg)}}>
            SIGN IN
          </button>
          <button 
            className={reg ? 'form-btn-active' : 'form-btn-disabled'}
            onClick={() => {setReg(!reg)}}>
              SIGN UP
          </button>
        </div>
      </div>
      { !reg ? ( <Login /> ) : ( <Register />) }
    </>
  )
}
