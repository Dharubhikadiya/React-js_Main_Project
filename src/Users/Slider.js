import React from 'react'

const Slider = () => {
  return (
    <div className='bg-light'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container d-flex">
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <div className="slider-content">
                  <h5 className='fs-5'>New Arrivals 2023</h5>
                  <h1 className='mb-4'>The Clothing Collection</h1>
                  <a href="#">
                    <button className='bg-light px-3 py-2 border border-dark hover'>Shop Collection</button>
                  </a>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-end justify-content-center">
              <img src="https://shofy-nuxt.vercel.app/img/slider/2/slider-1.png"  style={{ height: '700px' }} className="d-block mt-4" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="container d-flex">
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <div className="slider-content">
              <h5 className='fs-5'>Best Selling 2023</h5>
              <h1 className='mb-4'>The Summer Collection</h1>
              <a href="#">
                <button className='bg-light px-3 py-2 border border-dark hover'>Shop Collection</button>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-center">
          <img src="https://shofy-nuxt.vercel.app/img/slider/2/slider-2.png"  style={{ height: '700px' }} className="d-block mt-4" alt="..." />
          </div>
        </div>
          </div>
          <div className="carousel-item">
          <div className="container d-flex">
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <div className="slider-content">
              <h5 className='fs-5'>Winter Has Arrived</h5>
              <h1 className='mb-4'>Amazing New designs</h1>
              <a href="#">
                <button className='bg-light px-3 py-2 border border-dark hover'>Shop Collection</button>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-center">
          <img src="https://shofy-nuxt.vercel.app/img/slider/2/slider-3.png"  style={{ height: '700px' }} className="d-block mt-4" alt="..." />
          </div>
        </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Slider
