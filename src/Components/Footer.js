import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className='mt-5 pt-5'>
  <div className="container d-flex align-items-center justify-content-center">
    <div className=" d-flex justify-content-between">
      <div className="col-md-3 row justify-content-center">
        <div className="last">
          <div className="foot l-foot">
            <img src='https://shofy-nuxt.vercel.app/img/logo/logo.svg' alt />
            <p className='fs-5 mt-4'>We are a team of designers and developers that create high quality WordPress</p>
          </div>
          <a href="#">
            <div className="box4 d-flex">
              <div className="box row align-items-center justify-content-center">
              <i className="bi bi-facebook text-secondary fs-4 pe-4 me-2"></i>
              </div>
              <div className="box row align-items-center justify-content-center">
              <i className="bi bi-twitter text-secondary fs-4 pe-4 me-2"></i>
              </div>
              <div className="box row align-items-center justify-content-center">
              <i className="bi bi-linkedin text-secondary fs-4 pe-4 me-2"></i>
              </div>
              <div className="box row align-items-center justify-content-center">
              <i className="bi bi-vimeo text-secondary fs-4 pe-4 me-2"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-3 row justify-content-center">
        <div className="last">
          <div className="foot">
            <h5 className='fw-bold mb-3'>My Account</h5>
            <div className="line" />
          </div>
          <div className="caret">
            <ul>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Track Orders</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Shipping</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Wishlist</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />My Account</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Order History</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Returns</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 row justify-content-center">
        <div className="last">
          <div className="foot">
            <h5 className='fw-bold mb-3'>Infomation</h5>
            <div className="line" />
          </div>
          <div className="caret">
            <ul>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Our Story</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Careers</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Privacy Policy</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Terms &amp; Conditions</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Latest News</li>
              <li className="py-1 row align-items-center"><i className="fa-solid fa-circle fa-2xs" style={{color: '#55585b'}} />Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 row justify-content-center">
        <div className="last">
          <div className="foot">
            <h5 className='fw-bold mb-3'>Talk To Us</h5>
            <div className="last">
            
                <p>Got Questions? Call us</p>
                <h3 className='fs-5'>+670 413 90 762</h3>
                <p className="py-1 li row align-items-center"><i className="fa-regular fa-envelope" />
                  <span>shofy@mail.com</span>
                </p>
                <p className="py-1 li row align-items-center"><i className="fa-solid fa-location-dot" />
                  <span>79 Sleepy Hollow St.<br />
                    Jamaica, New York 1432</span>
                </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div >
  )
}

export default Footer