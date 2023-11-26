import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Userauth from './Userauth'
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [updatedCartData, setUpdatedCartData] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);


  const navigate = useNavigate();
  const getAllCart = () => {
   
      console.log(Userauth);
      axios.get(`http://localhost:8000/carts?userId=${Userauth().id }`)
      .then((res) => {
        setCart(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const editCart = (id,Qty) => {
    let edit = cart.map((val)=>{
        if(val.id === id){
            return {
                ...val,
                qty : parseInt(Qty)
            }
        }
        return  val;
    })
    setCart(edit)

    let updateCart = edit.find((v)=>{
        return v.id == id;
    })
   
    axios.patch(`http://localhost:8000/carts/${updateCart.id}`,{
        qty : updateCart.qty
    }).then((res)=>{
        getAllCart();
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}
  
  const deletdata = (id) => {
    axios.delete(`http://localhost:8000/carts/${id}`)
      .then((res) => {
        // Remove the deleted item from the cart state
        setCart(cart.filter(item => item.id !== id));
        alert("Item successfully deleted");
      })
      .catch((err) => {
        console.error("Failed to delete item:", err);
      });
  }

  const edit = (id, newQty) => {
    // Update the quantity for a specific item in the cart.
    const updatedItems = updatedCartData.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );
    setUpdatedCartData(updatedItems);
  };

  useEffect(() => {
    // console.log(!Userauth);
    if(!Userauth().id){
      navigate('/')
    }
    getAllCart();
  },[]);

  useEffect(() => {
    // Calculate the total price and update the finalTotal state.
    let totalPrice = 0;
    updatedCartData.forEach((item) => {
      totalPrice += item.price * item.qty;
    });
    setFinalTotal(totalPrice);
  }, [updatedCartData]);


  return (
    <div clssName='container'>
    <h1 className='container pt-5'>Shopping Cart</h1>
        <div className='container d-flex align-items-center text-secondary'>
          <p>Home</p>
          <i class="bi bi-dot pb-3 fs-3"></i>
          <p>Shopping Cart</p>
        </div>
    <table className='w-100 text-center mb-5 mt-4'>
    <thead>
      <tr  className='bg-light'>
        <th className='py-3'>Product</th>
        <th className='py-3'>Name</th>
        <th className='py-3'>Price</th>
        <th className='py-3'>Quantity</th>
        <th className='py-3'>Action</th>
      </tr>
    </thead>

      {
        
        cart.map((val)=>{
          return(
          <tbody className='mb-5'>
            <tr>
              <td><img style={{ width: '160px' }} src={val.image} alt /></td>
              <td>{val.name}</td>
              <td><span>{val.price * val.qty}</span></td>
              <td><input type='number' value={val.qty} onChange={ (e) => editCart(val.id,e.target.value) }  /></td>
              <td><span className='span'><i onClick={()=>deletdata(val.id)} class="bi bi-trash pe-3 fs-4"></i></span>
              </td>
            </tr>
          </tbody>
          
          )
        })
      }
      </table>
    </div>
  )
}

export default Cart
