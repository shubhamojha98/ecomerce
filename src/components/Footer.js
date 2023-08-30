import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs"
const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="/images/newsletter.png" alt="newslatter" />
              <h2 className="text-white mb-0">Sign up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
              <div class="input-group">
                        <input 
                        type="text" 
                        class="form-control py-2" 
                        placeholder="Youer Email Address" 
                        aria-label="Youer Email Address" 
                        aria-describedby="basic-addon2"/>
                        <span class="input-group-text p-3" id="basic-addon2">
                            Subscribe</span>
               </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className='text-white fs-6'>HNo: Q-145,
              Sona South City-2
              Gurugram,Haryana-121018
              </address>
              <a href="tel:+91 8935895675" className="mt-4 d-block mb-2 text-white">
                +91 8935895675</a>
              <a href="mailto:shubhamojha.ojha098@gmail.com" 
                className="mt-4 d-block mb-2 text-white">
                  shubhamojha.ojha098@gmail.com</a>
              <div className="social-icons d-flex align-items-center gap-30">
                <a href="" className='text-white'>
                  <BsLinkedin className='fs-4'/>
                </a>
                <a href="" className='text-white'>
                  <BsInstagram className=' fs-4'/>
                </a>
                <a href="" className='text-white'>    
                  <BsGithub className='fs-4'/>
                </a>
                <a href="" className='text-white'>
                <BsYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link to='privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='shipping-policy' className='text-white py-2 mb-1'>Shiiping Policy</Link>
              <Link to='term-conditions' className='text-white py-2 mb-1'>Terms & Condition</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Accounts</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>Contact Us</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white py-2 mb-1'>Laptop</Link>
              <Link className='text-white py-2 mb-1'>Headphone</Link>
              <Link className='text-white py-2 mb-1'>Tablet</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div> 
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; { new Date().getFullYear()}; Powered by Bazzar.com</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer