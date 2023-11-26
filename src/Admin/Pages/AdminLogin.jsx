import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            let users = await axios.get(`http://localhost:8000/admin?email=${email}&password=${password}`)

            if (users.data.length === 0) {
                alert("email or password is not valid");
                return false;
            }

            localStorage.setItem('checkUserLogin', JSON.stringify(users.data[0]));
            setEmail("");
            setPassword("");
            navigate('/admin/dashboard');

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div>
            <h1 className='pt-5 text-center'>My account</h1>
            <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
                <p>Home</p>
                <i class="bi bi-dot pb-3 fs-3"></i>
                <p>My account</p>
            </div>
            <div className='container d-flex justify-content-center align-items-center'>

                <div className='loginform shadow p-3 mb-5 bg-body pb-4'>
                    <h3 className='text-center pt-5'>Login to Shofy.</h3>
                    <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
                        <p>Don’t have an account?</p>
                        <p >
                        <NavLink to={`/register`} className='text-decoration-none ps-2'>Create a free account</NavLink></p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <div className='icons border py-3 px-5'>
                            <img src='https://shofy-nuxt.vercel.app/img/icon/login/google.svg' className='pe-2'></img>
                            Sign in with google
                        </div>
                        <div className='icons border py-3 px-4 mx-3'>
                            <img src='https://shofy-nuxt.vercel.app/img/icon/login/facebook.svg' className=''></img>
                        </div>
                        <div className='icons border py-3 px-4'>
                            <img src='https://shofy-nuxt.vercel.app/img/icon/login/apple.svg' className=''></img>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-5'>
                        <span className='text-secondary'>-------------------</span>
                        <p className='mx-3 text-secondary mb-0'>or Sign in with Email</p>
                        <span className='text-secondary'>-------------------</span>
                    </div>
                    <div className="input-box d-flex justify-content-center align-items-center my-3 mb-5">
                        <label className="input-label px-1 fs-6">Your Email</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='shofy@mail.com' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
                    </div>
                    <div className="input-box d-flex justify-content-center align-items-center my-4">
                        <label className="input-label px-1">Password</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Min. 6 character' className="p-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
                    </div>
                    <div className='d-flex text-end justify-content-end align-items-end pe-5 me-5  text-secondary'>
                    <p >
                    <NavLink to={`/`} className='text-decoration-none ps-2'>Forgot Password?</NavLink></p>
                </div>
                    <div className='d-flex justify-content-center align-items-centerx'>
                        <button type="button" onClick={() => handleSubmit()} className='button border border-secondary text-center fs-6 w-75 py-3 fw-bold mb-5 mt-3'>Login </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
