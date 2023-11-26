import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Users/Home';
import Layout from './Components/Layout';

import AdminNavbar from './Admin/Pages/AdminNavbar';
import AdminLogin from './Admin/Pages/AdminLogin';
import AdminProduct from './Admin/Pages/AdminProduct';
import AdminRegister from './Admin/Pages/AdminRegister';
import AdminLayout from './Admin/component/AdminLayout';
import AdminHeader from './Admin/component/AdminHeader';
import AdminDashboard from './Admin/Pages/AdminDashboard';
import AdminViewProduct from './Admin/Pages/AdminViewProduct';
import Users from './Admin/Pages/Users';
import UserDetails from './Admin/Pages/UserDetails';

import Product from './Users/Product';
import Login from './Users/Login';
import Register from './Users/Register';
import Cart from './Users/Cart';
import ProductDetails from './Users/ProductDetails';
import AdminCategory from './Admin/Pages/AdminCategory';
import Profile from './Admin/Pages/Profile';
import Otp from './Users/Otp';
import Forgot from './Users/Forgot';
import NewPassword from './Users/NewPassword';
import AdminFrogot from './Admin/Pages/AdminFrogot';
import AdminOtp from './Admin/Pages/AdminOtp';
import AdminNewpassword from './Admin/Pages/AdminNewpassword';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/ProductDetails/:productId' element={<ProductDetails/>}></Route>
                <Route path='/otp' element={<Otp/>}></Route>
                <Route path='/forgot' element={<Forgot/>}></Route>
                <Route path='/newpassword' element={<NewPassword/>}></Route>
            </Route>

            <Route element={<AdminLayout/>}>
            <Route path='/admin/users' element={<Users/>}></Route>
            <Route path='/admin/header' element={<AdminHeader/>}></Route>
            <Route path='/admin/UserDetails/:userId' element={<UserDetails/>}></Route>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
            <Route path='/admin/adminNavbar' element={<AdminNavbar/>}></Route>
            <Route path='/admin/adminproductview' element={<AdminViewProduct/>}></Route>
            <Route path='/admin/product' element={<AdminProduct/>}></Route>
            <Route path='/admin/category' element={<AdminCategory/>}></Route>
            <Route path='/adminforgot' element={<AdminFrogot/>}></Route>
            <Route path='/adminotp' element={<AdminOtp/>}></Route>
            <Route path='/adminnewpassword' element={<AdminNewpassword/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            </Route>

            <Route path='/admin' element={<AdminLogin/>}></Route>
            <Route path='/admin/register' element={<AdminRegister/>}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
