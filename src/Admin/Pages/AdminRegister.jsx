import React from 'react'
import { Link } from 'react-router-dom'


const AdminRegister = () => {
  return (
    <div>
        <h1 className='pt-5 text-center'>Register Now</h1>
        <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
            <p>Home</p>
            <i class="bi bi-dot pb-3 fs-3"></i>
            <p>My Register</p>
        </div>
        <div className='container d-flex justify-content-center align-items-center'>

            <div className='loginform shadow p-3 mb-5 bg-body pb-4'>
                <h3 className='text-center pt-5'>Sign Up Shofy.</h3>
                <div className='d-flex text-center justify-content-center align-items-center text-secondary'>
                    <p>Already have an account? </p>
                    <p >
                    <Link to={`/admin/login`} className='text-decoration-none ps-2'>Sign In</Link></p>
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
                <div class="input-box d-flex justify-content-center align-items-center my-3 mb-5">
                    <label class="input-label px-1 fs-6">Your Name</label>
                    <input type="email" name='name' placeholder='John Doe' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
                </div>
                <div class="input-box d-flex justify-content-center align-items-center my-3 mb-5">
                    <label class="input-label px-1 fs-6">Your Email</label>
                    <input type="email" name='email' placeholder='shofy@mail.com' className="p-3 pt-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
                </div>
                <div class="input-box d-flex justify-content-center align-items-center my-3 mb-5">
                    <label class="input-label px-1">Password</label>
                    <input type="password" name='password' placeholder='Min. 6 character' className="p-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
                </div>
                <div class="input-box d-flex justify-content-center align-items-center my-4">
                <label class="input-label px-1">Confirm Password</label>
                <input type="password" name='conpassword' placeholder='Min. 6 character' className="p-3 w-75 border" onfocus="setFocus(true)" onblur="setFocus(false)" />
            </div>
                <div className='d-flex justify-content-center align-items-centerx'>
                    
                    <button type="button" className='button border border-secondary text-center fs-6 w-75 py-3 fw-bold mb-5 mt-3'>Sign Up </button>
                   
                </div>
                <button><Link to='/admin/register'></Link></button>

            </div>

        </div>
    </div>
  )
}

export default AdminRegister