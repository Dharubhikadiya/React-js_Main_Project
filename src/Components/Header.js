import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  let loginuser = JSON.parse(localStorage.getItem('checkUserLogin'));

  const logout = () => {
    localStorage.clear('checkUserLogin')
    navigate('/');
  }
  
  return (
    <div className='shadow-sm p-2 mb-1 bg-body'>
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light hover">
        <div className="container-fluid d-flex justify-content-between">
          <NavLink className="navbar-brand" href="#">
            <img src='https://shofy-nuxt.vercel.app/img/logo/logo.svg'></img>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center">
              <li className="nav-item px-1">
                <NavLink to={`/`} className="nav-link active" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item px-1">
                <NavLink to={`/product`} className="nav-link active" aria-current="page" href="#">Product</NavLink>
              </li>
              
             
              {
                !loginuser ? (<>

                <li className="nav-item px-1">
                <NavLink to={`/register`} className="nav-link active" aria-current="page" href="#">Register</NavLink>
              </li>
                  </>) : (<>
                    <li className="nav-item px-1">
                    <NavLink to={`/`} onClick={()=>logout()} className="nav-link active" aria-current="page" href="#">Logout</NavLink>
                  </li>
                  <li className="nav-item px-1">
                  <NavLink to={`/cart`} className="nav-link active" aria-current="page" href="#">Cart</NavLink>
                </li>
                    </>)
              }
              <li className="nav-item px-1">
              <NavLink to={`/login`} className="nav-link active" aria-current="page" href="#">Login</NavLink>
            </li>
              <li className="nav-item px-1">
                <NavLink to={`/contact`} className="nav-link active" aria-current="page" href="#">Contact</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn m-0 p-1"><i class="bi bi-person fs-4"></i></button>
              <button className="btn m-0 p-1"><i class="bi bi-heart"></i></button>
              <button className="btn m-0 p-1"><i class="bi bi-minecart-loaded"></i></button>
            </form>
          </div>
        </div>
      </nav>

    </div>
    </div>
  )
}

export default Header
