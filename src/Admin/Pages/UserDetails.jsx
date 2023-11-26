import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {

  const { userId } = useParams();

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("");

  const getUserDetails = () => {
    console.log(userId);
    axios.get(`http://localhost:8000/users/${userId}`)
      .then((res) => {
        setUser(res.data)
      }).catch((err) => {
        console.log(err);
        return false;

      })
  }

  const getUserCartDetails = () => {
    axios.get(` http://localhost:8000/carts?userId=${userId}`)
      .then((res) => {
        setCart(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getUserCartDetails();
    getUserDetails();
  }, [])

  return (
    <div>
      <main id="main" className="main">
        <div className="ps-5 col-lg-12 pt-2">
          <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
            <h4 className="text-start text-primary mb-4">Users Details</h4>

            <div clssName='container'>
              <div>
                <button className='p-2 bg-light border-0 mb-3'>Name :- {user.name}</button>
              </div>
              <div>
                <button className='p-2 bg-light border-0 mb-3'>Email :- {user.email}</button>
              </div>

              <table className='w-100 text-center mb-5 mt-4'>
                <thead>
                  <tr className='bg-light'>
                    <th className='py-3'>Product</th>
                    <th className='py-3'>Name</th>
                    <th className='py-3'>Price</th>
                    <th className='py-3'>Quantity</th>
                  </tr>
                </thead>
                {
                  cart.map((val) => {
                    return (
                      <tbody className='mb-5'>
                        <tr>
                          <td><img style={{ width: '160px' }} src={val.image} alt /></td>
                          <td>{val.name}</td>
                          <td><span>{val.price}</span></td>
                          <td>{val.qty}</td>
                        </tr>
                      </tbody>
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default UserDetails;