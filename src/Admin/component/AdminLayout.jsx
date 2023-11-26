import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
  return (
    <div>
<AdminHeader/>
<main style={{minHeight : '90vh'}}>
<Outlet/>
</main>
    </div>
  )
}

export default AdminLayout