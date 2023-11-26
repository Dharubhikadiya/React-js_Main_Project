import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Forgot = () => {

    let navigate = useNavigate();
    const [email,setEmail] = useState("");

    const handleSubmit = () => {
        let userEmail = JSON.parse(localStorage.getItem('checkUserLogin'));
        if(userEmail.email === email){
            console.log(email);
            navigate('/otp');       
        }
    }

  return (
    <div>
    <h1 className='pt-5 text-center fw-bold'>Forgot Password</h1>
    <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
        <p>Home</p>
        <i class="bi bi-dot pb-3 fs-3"></i>
        <p>Reset Password</p>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>

        <div className='loginform shadow p-3 mb-5 bg-body pb-4'>
            <h3 className='text-center pt-5 fw-bold'>Reset Password</h3>
            <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
                <p className='pb-3'>Enter your email address to request password reset.</p>
            </div>
            
            <div className="input-box d-flex justify-content-center align-items-center my-3 mb-3">
                <label className="input-label px-1 fs-6">Your Email</label>
                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='shofy@mail.com' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
            </div>
           
            <div className='d-flex justify-content-center align-items-centerx'>
                <button type="button" onClick={() => handleSubmit()} className='button border border-secondary text-center fs-6 w-75 py-3 fw-bold mb-3 mt-3'>Send Mail</button>
            </div>
            <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
                <p className='pb-3'>Remember Password?<NavLink to={'/login'}>Login</NavLink></p>
            </div>                                                                          
        </div>

    </div>
</div>
  )
}

export default Forgot;
