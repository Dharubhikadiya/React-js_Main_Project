import React from 'react'
import Slider from './Slider'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [product, setProduct] = useState([]);
    const [clothing, setClothing] = useState([]);
    const [bags,setBags] = useState([]);
    const [shoes,setShose] = useState([]);
    const [headphones,setHeadphones] = useState([]);
    const [bluestooth,setBluetooth] = useState([]);
    const [beauty,setBeauty] = useState([]);
    const [tablets,settablets] = useState([]);
    const [watch,setWatch] = useState([]);

    const allProduct = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const allclothing = () => {
        axios.get(`http://localhost:8000/products`)
        .then((res)=>{
            let ans = res.data.filter((val,i)=>{
                if(i<1){
                    return val.category === "Clothing"
                }
            })
            setClothing(ans);
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allbags = () => {
        axios.get(`http://localhost:8000/products?category=Bags&&status=instock`)
        .then((res)=>{
            setBags(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allshoes = () => {
        axios.get(`http://localhost:8000/products?category=Shoes&&status=instock`)
        .then((res)=>{
            setShose(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allheadphones = () => {
        axios.get(`http://localhost:8000/products?category=HeadPhones&&status=instock`)
        .then((res)=>{
            setHeadphones(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allbeauty = () => {
        axios.get(`http://localhost:8000/products?category=Bluetooth&&status=instock`)
        .then((res)=>{
            setBeauty(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allwatch = () => {
        axios.get(`http://localhost:8000/products?category=Smart Watch&&status=instock`)
        .then((res)=>{
            setWatch(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const allbluetooth = () => {
        axios.get(`http://localhost:8000/products?category=Beauty of Skin&&status=instock`)
        .then((res)=>{
            setBluetooth(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    const alltablets = () => {
        axios.get(`http://localhost:8000/products?category=Mobile Tablets&&status=instock`)
        .then((res)=>{
            settablets(res.data.slice(0,1));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
    }

    useEffect(() => {
        allProduct();
        allclothing();
        allbags();
        allbeauty();
        allbluetooth();
        allheadphones();
        allshoes();
        allwatch();
        alltablets();
    }, [])

    return (
        <div>
            <Slider />
            <div className="container p-5">
                <p className="text-danger text-center fw-bold">All Product Shop</p>
                <h2 className="pb-5 text-center">Customer Favorite Style Product</h2>
                <div className="row">
                    {
                        clothing.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none  p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={val.image} />
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
                    {
                        bags.map((v) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={v.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
                                            <p className='mb-1 text-dark'>{v.category}</p>
                                            <h5 className='text-dark'>{v.name}</h5>
                                            <div className="cartbox d-flex text-dark">
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                            </div>
                                            <h6 className='pt-2 text-dark'>{v.price}</h6>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        shoes.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={val.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
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
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        bluestooth.map((v) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={v.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
                                            <p className='mb-1 text-dark'>{v.category}</p>
                                            <h5 className='text-dark'>{v.name}</h5>
                                            <div className="cartbox d-flex text-dark">
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                            </div>
                                            <h6 className='pt-2 text-dark'>{v.price}</h6>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        tablets.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={val.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
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
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        headphones.map((v) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={v.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
                                            <p className='mb-1 text-dark'>{v.category}</p>
                                            <h5 className='text-dark'>{v.name}</h5>
                                            <div className="cartbox d-flex text-dark">
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                            </div>
                                            <h6 className='pt-2 text-dark'>{v.price}</h6>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        beauty.map((val) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={val.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
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
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        watch.map((v) => {
                            return (
                                <div className="col-md-3 pb-4 d-flex align-items-center">
                                    <div className="card shadow-none p-0 border-0" style={{ width: '18rem', padding: '15px' }}>
                                        <img src={v.image} />
                                        <a href="#" className='card-body p-0 py-3 text-decoration-none'>
                                            <p className='mb-1 text-dark'>{v.category}</p>
                                            <h5 className='text-dark'>{v.name}</h5>
                                            <div className="cartbox d-flex text-dark">
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                                <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                            </div>
                                            <h6 className='pt-2 text-dark'>{v.price}</h6>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <span className='text-center d-block text-danger mb-2 fw-bold'>Our Blog & News</span>
                <h2 className='text-center'>Latest News & Articles</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                    <div className="col-md-4">
                        <div className="card shadow-none border-0">
                            <img src="https://shofy-nuxt.vercel.app/img/blog/2/blog-1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body p-0">
                                <p className="card-title pt-4"><i class="bi bi-tag pe-1"></i>Fashion ,Lift Style ,News false</p>
                                <h5 className="card-text">The 'Boomerang' Employees Returning After Quitting</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-none border-0">
                            <img src="https://shofy-nuxt.vercel.app/img/blog/2/blog-2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body p-0">
                            <p className="card-title pt-4"><i class="bi bi-tag pe-1"></i>Fashion ,Lift Style ,News false</p>
                            <h5 className="card-text">Fast fashion: How clothes are linked to climate change</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-none border-0">
                            <img src="https://shofy-nuxt.vercel.app/img/blog/2/blog-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body p-0">
                                <p className="card-title pt-4"><i class="bi bi-tag pe-1"></i>Fashion ,Lift Style ,News false</p>
                                <h5 className="card-text">The Sound Of Fashion: Malcolm McLaren Words</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center mb-5'>
                <button className='bg-white px-3 py-2 border border-dark hover'>Discover More</button>
              </div>

                <div className="free border border-1 d-flex align-items-center justify-content-center mt-5">
                    <div className="col-md-3 p-4 border-end d-flex align-items-center justify-content-center">
                        <div className="truck d-flex align-items-center justify-content-center">
                            <i class="bi bi-truck fs-2"></i>
                            <div className="order ms-3">
                                <h6 className='mb-0'>Free Delivary</h6>
                                <span>Orders from all item</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-4 border-end  d-flex align-items-center justify-content-center">
                        <div className="truck d-flex align-items-center justify-content-center">
                            <i class="bi bi-currency-dollar fs-2"></i>
                            <div className="order ms-2">
                                <h6 className='mb-0'>Free Delivary</h6>
                                <span>Orders from all item</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 p-4 border-end  d-flex align-items-center justify-content-center">
                        <div className="truck d-flex align-items-center justify-content-center">
                            <i class="bi bi-gear fs-2"></i>
                            <div className="order ms-3">
                                <h6 className='mb-0'>Free Delivary</h6>
                                <span>Orders from all item</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-4 d-flex align-items-center justify-content-center">
                        <div className="truck b-t d-flex align-items-center justify-content-center">
                            <i class="bi bi-headphones fs-2"></i>
                            <div className="order ms-2">
                                <h6 className='mb-0'>Free Delivary</h6>
                                <span>Orders from all item</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-4 mb-5 pb-5'>
                <div className='col-md-2 p-2'>
                    <img src="https://shofy-nuxt.vercel.app/img/instagram/2/insta-1.jpg" style={{ width: '100%' }} className="" alt="..." />
                </div>
                <div className='col-md-2 p-2'>
                    <img src="https://shofy-nuxt.vercel.app/img/instagram/2/insta-2.jpg" style={{ width: '100%' }} className="" alt="..." />
                </div>
                <div className='col-md-2 p-3 text-center border border-dark'>
                    <img src="https://shofy-nuxt.vercel.app/img/instagram/2/insta-icon.png" style={{ width: '45%' }} className="mx-auto mb-4" alt="..." />
                    <span className='mb-0 fs-5 d-flex align-items-center justify-content-center'>Follow Us on</span>
                    <h2 className='fw-bold fs-1 d-flex align-items-center justify-content-center'>Instagram</h2>
                </div>
                <div className='col-md-2 p-2'>
                    <img src="https://shofy-nuxt.vercel.app/img/instagram/2/insta-3.jpg" style={{ width: '100%' }} className="" alt="..." />
                </div>
                <div className='col-md-2 p-2'>
                    <img src="https://shofy-nuxt.vercel.app/img/instagram/2/insta-4.jpg" style={{ width: '100%' }} className="" alt="..." />
                </div>
            </div>

        </div>
    )
}

export default Home
