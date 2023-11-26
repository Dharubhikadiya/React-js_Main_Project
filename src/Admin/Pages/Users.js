import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/users`)
        .then((res)=>{
            setUsers(res.data)
        }).catch((err)=>{
            console.log(err);
            return err;
        })
    },[])

  return (
      <main id="main" className="main">
      <div className="ps-5 col-lg-12 pt-2">
      <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
          <h3 className="text-center mb-5 text-primary">View Users</h3>

          <table className="table table-hover text-center">
              <thead className='py-5'>
                  <tr className='table-dark'>
                      <th className='py-3' scope="col">Id</th>
                      <th className='py-3' scope="col">Name</th>
                      <th className='py-3' scope="col">Email</th>
                      <th className='py-3' scope="col">Password</th>
                      <th className='py-3' scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map((val) => {
                          return (
                              <tr>
                                  <td className='text-center pt-4 pb-0 mb-0'>{val.id}</td>
                                  <td className='text-center pt-4 pb-0 mb-0'>{val.name}</td>
                                  <td className='text-center pt-4 pb-0 mb-0'>{val.email}</td>
                                  <td className='text-center pt-4 pb-0 mb-0'>{val.password}</td>
                                  <td className='text-center pt-4 pb-0 mb-0'>

                                      <Link to={`/admin/userdetails/${val.id}`}>
                                          <button className='p-2 bg-light border-1 mb-3'>View</button>
                                      </Link>


                                  </td>
                              </tr>
                          )
                      })
                  }

              </tbody>
          </table>
      </div>
  </div>
      </main>
  )
}

export default Users