import React from 'react'
import { Link } from 'react-router-dom'


const AdminNavbar = () => {
  return (
    <div>
    <Link to='/admin/product'>Product</Link>
    <Link to='/admin/category'>Category</Link>
    </div>
  )
}

export default AdminNavbar
