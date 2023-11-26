import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [marketstatus,setMarketstatus] = useState([]);
  const [currentpage,setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  

  const [data, setData] = useState([])
const [loading, setLoading] = useState(true);

  const recordperpage = 6;
  const lastIndex = currentpage * recordperpage;
  const firstIndex = lastIndex - recordperpage;

  const currenProduct = products.slice(firstIndex,lastIndex);

  const npages = Math.ceil(products.length / recordperpage);

  const number = [...Array(npages + 1).keys()].slice(1);

  const changeCpage = (id) => {
    setCurrentPage(id)
  }


  const allProduct = () => {
    axios.get(`http://localhost:8000/products?status=instock`)
      .then((res) => {
        setProducts(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allCategory = () => {
    axios.get(`http://localhost:8000/category`)
      .then((res) => {
        setCategory(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allmarketstatus = () => {
    axios.get(` http://localhost:8000/marketstatus`)
      .then((res) => {
        setMarketstatus(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const categoryFilter = (category) => {
    if (category === "All") {
      allProduct();
    } else {
      axios.get(` http://localhost:8000/products?category=${category}&status=instock`)
        .then((res) => {
          setProducts(res.data)
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  }

  const marketstatusFilter = (marketstatus) => {
    if (category === "All") {
      allProduct();
    } else {
      axios.get(` http://localhost:8000/products?marketstatus=${marketstatus}&status=instock`)
        .then((res) => {
          setProducts(res.data)
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  }

  const searchdata = async(e) => {
    let data = await axios.get(`http://localhost:8000/products?q=${e}`);
    setProducts(data.data)
  }

  useEffect(() => {
    allProduct();
    allCategory();
    allmarketstatus();
  }, [])

  return (
    <div>
      <div className='container mt-5'>
        <h1 className='pt-5'>Shop Grid</h1>
        <div className='d-flex align-items-center text-secondary mb-3'>
          <p>Home</p>
          <i class="bi bi-dot pb-3 fs-3"></i>
          <p>Shop Grid</p>
        </div>
        <div className='d-flex mb-4 justify-content-between'>
        <div className='col-md-3'>
      
      </div>
              
            </div>
           
      </div>
      <div className='container d-flex'>
        <div className='col-md-3'>
          <h5 className='mb-0 fw-bold'>Categories</h5>
          <hr className='my-3s text-secondary'></hr>
          {
            category.map((val) => {
              return (
                
                  <div>
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                      <label className="form-check-label text-secondary" >
                        <i class="bi bi-dot"></i>
                        {val.category_name}
                      </label>
                      <input onClick={() => categoryFilter(val.category_name)} className="form-check-input border-2" type="radio" name="flexRadioDefault" />
                    </div>
                  </div>
               
              )
            })
          }
          <div className='d-flex justify-content-between mb-3 mt-4'>
            <label className="form-check-label text-secondary" >
              <i class="bi bi-dot"></i>
              All
            </label>
            <input onClick={() => categoryFilter("All")} className="form-check-input border-2" type="radio" name="flexRadioDefault" />
             
          </div>
          <h5 className='mb-0 fw-bold mt-5'>Status</h5>
          <hr className='my-3s text-secondary'></hr>
          {
            marketstatus.map((val) => {
              return (
                
                  <div>
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                      <label className="form-check-label text-secondary" >
                        <i class="bi bi-dot"></i>
                        {val.marketstatus}
                      </label>
                      <input onClick={() => marketstatusFilter(val.marketstatus)} className="form-check-input border-2" type="radio" name="flexRadioDefault" />
                    </div>
                  </div>
               
              )
            })
          }
          <div className='d-flex justify-content-between mb-3 mt-4'>
            <label className="form-check-label text-secondary" >
              <i class="bi bi-dot"></i>
              All
            </label>
            <input onClick={() => categoryFilter("All")} className="form-check-input border-2" type="radio" name="flexRadioDefault" />
          </div>
        </div>
        <div className='col-md-9 ms-4'>
          <div className='row'>
          <form className="d-flex align-item-center justify-content-end">
              <input onChange={(e)=>searchdata(e.target.value)} className="form-control mb-4 py-3 ps-4 w-50" type="search" placeholder="Search For Products...."/>
            </form>
            {
             
                currenProduct.map((val) => {
                return (
                  <div className="col-md-4 pb-4 d-flex align-items-center">
                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                      <img src={val.image} />
                      <Link to={`/ProductDetails/${val.id}`}>
                        <span className='bg-dark text-light text-center fs-5 py-1'>View More</span>
                      </Link>
                      <NavLink className='card-body p-0 py-3 text-decoration-none'>
                        <p className='mb-1 text-dark'>{val.category}</p>
                        <h5 className='text-dark'>{val.name}</h5>
                        <div className="cartbox d-flex text-dark">
                          <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                          <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                          <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                          <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                          <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                        </div>
                        <h6 className='pt-2 text-dark'>{val.price}</h6>
                      </NavLink>
                    </div>
                  </div>
                )
              })
            }
            <div className='d-flex align-items-center justify-content-center'>
          
          
            {number.map(n => (
              <div className='border '>
              <div key={n} 
              className= {`page-item ${currentpage == n ? 'active' : ''} `}>

              <a onClick={() => setCurrentPage(n)}  
                  className='page-link p-3 px-4' 
                  href='#'>
                  {n}
              </a>
          </div>
              </div>
          ))}
          
            </div>
          </div>
        </div>
      </div>
            
      
    
    </div>
  )
}


export default Product