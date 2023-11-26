import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const NewPassword = () => {

    const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [cPassword,setCpassword] = useState("");

    const handlesubmit = () => {
        let admindata = JSON.parse(localStorage.getItem('checkUserLogin'));
        if(password === cPassword){
            axios.patch(`http://localhost:8000/users/${admindata.id}`,{
                password :password
            }).then((res)=>{
                localStorage.setItem('checkUserLogin',JSON.stringify(res.data));
                navigate('/login');
            }).catch((err)=>{
                console.log(err);
                return false
            })
        }else{
            alert("password do not match");
            return false;
        }
    }


  return (
    <div>
    <h1 className='pt-5 text-center fw-bold'>Create New Password</h1>
    <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
        <p>Home</p>
        <i class="bi bi-dot pb-3 fs-3"></i>
        <p>New password</p>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>

        <div className='loginform shadow p-3 mb-5 bg-body pb-4'>
            <h3 className='text-center pt-5 mb-5 fw-bold'>Enter your new password</h3>
            
          
            <div className="input-box d-flex justify-content-center align-items-center my-3 mb-5">
                <label className="input-label px-1 fs-6">New Password</label>
                <input type="email" name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='shofy@mail.com' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
            </div>
            <div className="input-box d-flex justify-content-center align-items-center my-3 mb-3">
                <label className="input-label px-1 fs-6">Confirm Password</label>
                <input type="email" name='cPassword' onChange={(e) => setCpassword(e.target.value)} value={cPassword} placeholder='shofy@mail.com' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
            </div>
            
           
            <div className='d-flex justify-content-center align-items-centerx'>
                <button type="button" onClick={() => handlesubmit()} className='button border border-secondary text-center fs-6 w-75 py-3 fw-bold mb-5 mt-3'>Sing In</button>
            </div>
        </div>

    </div>
</div>
  )
}

export default NewPassword