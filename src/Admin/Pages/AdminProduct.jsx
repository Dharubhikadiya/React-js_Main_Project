import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminProduct = () => {

  const [category, setCategory] = useState([]);

  const [categoryname, setCategoryName] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [image, setImage] = useState("");
  const [marketstatus, setMarketStatus] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/products`, {
      name: name,
      price: price,
      qty: qty,
      image: image,
      category: categoryname,
      marketstatus: marketstatus,
      status: status
    })
      .then((res) => {
        alert("Product successfully Add");
        setCategoryName("");
        setName("");
        setPrice("");
        setQty("");
        setImage("");
        setMarketStatus("");
        setStatus("");
      })
  }

  const category_name = () => {
    axios.get(`http://localhost:8000/category`,{
      category_name : category
    })
      .then((res) => {
        setCategory(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  useEffect(() => {
    category_name();
  }, [])

  return (
    <div>
    

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Layouts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Layouts</li>
            </ol>
          </nav>
        </div>{/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Multi Columns Form</h5>
                  {/* Multi Columns Form */}
                  <form className="row g-3">
                  <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                    <select name="categoryname" value={categoryname} onChange={(e) => setCategoryName(e.target.value)} className="form-control">
                      <option value="">---Select Category---</option>
                      {
                        category.map((item) => {
                          return (
                            <option value={item.category_name}>{item.category_name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                </div>
                    <div className="col-md-12">
                      <label htmlFor="inputName5" className="form-label">Your Name</label>
                      <input type="text" name="name" onChange={(e) => setName(e.target.value)}  value={name} className="form-control" id="inputName5" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail5" className="form-label">Price</label>
                      <input type="email" name="price" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" id="inputEmail5" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword5" className="form-label">Qauntity</label>
                      <input type="number" name="qty" onChange={(e) => setQty(e.target.value)} value={qty}  className="form-control" id="inputPassword5" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress5" className="form-label">Image Url</label>
                      <input type="text" name="image" onChange={(e) => setImage(e.target.value)} value={image} className="form-control" id="inputAddres5s" />
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="inputState" className="form-label">Status</label>
                      <select name="marketstatus" onChange={(e) => setMarketStatus(e.target.value)} value={marketstatus} className="form-select">
                        <option value="">Choose...</option>
                        <option value="instock">Instock</option>
                        <option value="outstock">Outstock</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">marketstatus</label>
                    <select name="status" onChange={(e) => setStatus(e.target.value)} value={status} className="form-select">
                      <option value="">Choose...</option>
                      <option value="tranding">Trending</option>
                      <option value="latest">Latest</option>
                      <option value="upcomming">Upcomming</option>
                      <option value="best">Best</option>
                    </select>
                  </div>
                    <div className="text-center">
                      <button type="button" onClick={() => handleSubmit()} className="btn btn-primary">Submit</button>
                      
                    </div>
                  </form>{/* End Multi Columns Form */}
                  <button className="btn btn-primary mt-5">
            <NavLink to={`/admin/adminproductview`} className="text-white">View Product</NavLink>
          </button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>{/* End #main */} 
      <Outlet/>
    </div>
  )
}

export default AdminProduct