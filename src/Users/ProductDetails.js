import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import checkUserLogin from './Userauth'
const ProductDetails = () => {

    const navigate = useNavigate();

    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const [qty, setQty] = useState(1);
    const total = 0

    const getSingleProductRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:8000/products/${productId}`);
            if (single) {
                setProducts(single.data)
            } else {
                console.log("record not fetch");
                return false;
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const Addtocart = (productId) => {
        if (!checkUserLogin()) {
            alert("Please Login Your Account");
            navigate('/login');
        } else {
            axios.get(`http://localhost:8000/carts?productId=${productId}&userId=${checkUserLogin().id}`)
                .then((res) => {
                    if (res.data.length > 0) {
                        alert("Product already add in cart");
                        navigate('/product');
                        return false
                    } else {
                        axios.get(`http://localhost:8000/products/${productId}`)
                            .then((res) => {
                                console.log(res.data);
                                axios.post(`http://localhost:8000/carts`, {
                                    name: res.data.name,
                                    price: res.data.price,
                                    qty: res.data.qty,
                                    image: res.data.image,
                                    category: res.data.category,
                                    productId: productId,
                                    userId: checkUserLogin().id
                                }).then((res) => {
                                    alert("Product successfully add");
                                    navigate('/cart')
                                }).catch((err) => {
                                    console.log(err);
                                    return false;
                                })
                            }).catch((err) => {
                                console.log(err);
                                return false;
                            })
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }

    }


    useEffect(() => {
        getSingleProductRecord();
    }, []);

    return (
        <>

            <div className='container'>
                <div className='d-flex align-items-center justify-content-between mb-5 mt-3'>
                    <div className='col-md-6 bg-light my-5 me-5'>
                        <div className='d-flex'>
                            <img src={products.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                    <div className='col-md-6 my-5 ms-4'>
                        <div>
                            <span className='text-secondary mb-2'>{products.category}</span>
                            <h2>{products.name}</h2>
                            <div className='d-flex review align-items-center py-3'>
                                <span className='text-primary fs-6 text-center d-flex align-items-center justify-content-center px-3 py-1'>{products.status}</span>
                                <div className="cartbox d-flex text-dark mx-3">
                                    <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                    <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                    <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                    <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                    <i class="bi bi-star-fill pe-1 fs-6 text-warning"></i>
                                </div>
                                <p className='text-secondary fs-6 mb-0'>(3 Reviews)</p>
                            </div>
                            <div className='d-flex'>
                                <p className='text-secondary'>Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards.... <span className='text-primary fw-bold'> See more</span> </p>

                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <span className='fs-6 text-secondary text-decoration-line-through'>1500</span>
                                <h4 className='ps-2'>{products.price}</h4>
                            </div>
                            
                            <button onClick={() => Addtocart(productId)} className='button border border-secondary text-center fs-6 w-75 py-2 my-4'>Add to Cart</button>
                            <div className='d-flex align-items-center'>
                                <p className='mb-0'>Share :</p>
                                <div>
                                    <i className="ms-3 fs-5 text-secondary bi bi-facebook" />
                                    <i className="ms-3 fs-5 text-secondary bi bi-twitter" />
                                    <i className="ms-3 fs-5 text-secondary bi bi-linkedin" />
                                    <i className="ms-3 fs-5 text-secondary bi bi-vimeo" />
                                </div>
                            </div>
                            <p className='mb-0 text-secondary pt-4'><i class="bi bi-dot"></i>30 days easy returns</p>
                            <p className='mb-0 text-secondary mt-1 pb-4'><i class="bi bi-dot"></i>Order yours before 2.30pm for same day dispatch</p>
                            <div className='mt-2 bg-light px-4 py-2 d-flex align-items-center justify-content-between'>
                                <p className='text-secondary fw-bold'>Guaranteed safe <br></br>
                                    & secure checkout</p>
                                <img src='https://shofy-nuxt.vercel.app/img/product/icons/payment-option.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails