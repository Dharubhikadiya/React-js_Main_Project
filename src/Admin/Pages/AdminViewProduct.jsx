import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const AdminViewProduct = () => {

    const [product, setProduct] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])

    const [status, setStatus] = useState(["instock", "outstock"]);

    // const changeMarketStatus = (upid, value) => {
    //     axios.patch(`http://localhost:8000/products/${upid}`, {
    //         marketstatus: value
    //     }).then((res) => {
    //         console.log("Status successfully update");
    //     }).catch((err) => {
    //         console.log(err);
    //         return false;
    //     })
    // }

    const changeStatus = (upid, value) => {
        axios.patch(`http://localhost:8000/products/${upid}`, {
            status: value
        }).then((res) => {
            alert("value update..");
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const changeMarketStatus = (upid,value) => {
        axios.patch(`http://localhost:8000/products/${upid}`,{
            marketstatus : value
        }).then((res)=>{
            alert("value update..");
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
     const viewproduct = () => {
        axios.get(`http://localhost:8000/products`)
        .then((res) => {
            setProduct(res.data);
        }).catch((err) => {
            console.log(err);
            return false;
        })
     }
   
    useEffect(() => {
        viewproduct();
    }, [])



    const deletedata = (upid) => {
        axios.delete(`http://localhost:8000/products/${upid}`)
            .then((res) => {
                // Remove the deleted product from the product state
                setProduct(product.filter(item => item.id !== upid));
                alert("Product successfully deleted");
            })
            .catch((err) => {
                console.error("Failed to delete product:", err);
            });
    }



    return (
        <main id="main" className="main">
            <div className="ps-5 col-lg-12 pt-2">
                <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                    <h3 className="text-center">View Product</h3>
                        <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Market Status</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>{val.price}</td>
                                            <td>
                                                <select onChange={(e) => changeMarketStatus(val.id, e.target.value)} className='form-control'>
                                                    <option value="">select market status</option>
                                                    {
                                                        marketstatus.map((item) => {

                                                            return (val.marketstatus === item ? <option selected>{val.marketstatus}</option> : <option>{item}</option>)

                                                        })
                                                    }
                                                   
    
                                                </select>
                                            </td>
                                            <td>
                                                <select onChange={(e) => changeStatus(val.id, e.target.value)} className='form-control'>
                                                    <option>---select status</option>
                                                    {
                                                        status.map((itemm) => {

                                                            return (val.status === itemm ? <option value={val.status} selected>{val.status}</option> : <option>{itemm}</option>)

                                                        })
                                                    }
                                                </select>
                                            </td>
                                           {
                                            <td><span className='span'><i onClick={()=>deletedata(val.id)} class="bi bi-trash pe-3 fs-4"></i></span>
                                            <span><i class="fs-4 ps-3 bi bi-pencil"></i></span>
                                        </td>
                                           }
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>

                <button className="btn btn-primary mt-5">
                    <NavLink to={`/admin/product`} className="text-white">Add Product</NavLink>
                </button>

            </div>
        </main>
    )
}

export default AdminViewProduct