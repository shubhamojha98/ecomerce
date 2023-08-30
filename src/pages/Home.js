import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialPrdouct from '../components/SpecialPrdouct'
import Container from '../components/Container'


const Home = () => {
  return (
  <>
  <Container class1='home-wrapper-1 py-5'>
  <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED FOR PROS.</h4>
                <h5>iPhone 13 Pro.</h5>
                <p>From Rs 89000 or Rs 919.62/mo.</p>
                <Link className="button ">BUY NOW</Link>
              </div>
            </div> 
          </div>
          <div className="col-6">
            <div className="d-flex gap-10 align-items-center flex-wrap justify-content-between">
            
            <div className="small-banner position-relative">
              <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>Best Sale</h4>
                <h5>iPhone 13 Pro.</h5>
                <p>From Rs 90000 <br/> or Rs 950/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>iPhone 13 Pro.</h5>
                <p>From Rs 90000 <br/> or Rs 950/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>iPhone 13 Pro.</h5>
                <p>From Rs 90000 <br/> or Rs 950/mo.</p>
                
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>iPhone 13 Pro.</h5>
                <p>From Rs 90000 <br/> or Rs 950/mo.</p>
                
              </div>
            </div>

            </div>
          </div>
        </div>
  </Container>

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders above Rs. 500</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Secure Payment</h6>
                  <p className="mb-0">100% Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-wrapper-3 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="cateogries d-flex align-items-center flex-wrap justify-content-between">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
      </div>
    </section>

    <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card img-fluid position-relative">
              <img src="images/famous-1.1.jpg" className="img-fluid" alt="famous-1" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From Rs.40000 or Rs.2000/mo</p>
              </div>              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card img-fluid position-relative">
              <img src="images/famous-2.jpg" className="img-fluid" alt="famous-1" />
              <div className="famous-content position-absolute">
              <h5>Studio Display</h5>
              <h6>600Nits of Brightness</h6>
              <p>27-inch 5K Retina display</p>
              </div>              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card img-fluid position-relative">
              <img src="images/famous-3.jpg" className="img-fluid" alt="famous-1" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">SmartPhones</h5>
              <h6 className="text-dark">Iphone 13 pro</h6>
              <p className="text-dark">From Rs.80000 or Rs.4000/mo </p>
              </div>              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card img-fluid position-relative">
              <img src="images/famous-4.jpg" className="img-fluid" alt="famous-1" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">HomeSpeakers</h5>
              <h6 className="text-dark">Room-filling sound</h6>
              <p className="text-dark">From Rs.8000 or Rs.400/mo </p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Product</h3>
          </div>
        </div>
        <div className="row">
          <SpecialPrdouct/>
          <SpecialPrdouct/>
          <SpecialPrdouct/>
          <SpecialPrdouct/>
        </div>
      </div>
    </section>

    <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
      </div>
    </section>

    <section className="marque-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="/images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>    
        </div>
        <div className="row">
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home