import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta"
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {BiGitCompare} from "react-icons/bi"
import{AiOutlineHeart} from "react-icons/ai"

const SingleProduct = () => {
    const props = {
        width: 400, 
        height: 600, 
        zoomWidth: 600, 
        img:"https://th.bing.com/th/id/R.54c9e079f75b561a00616031fd34eb8e?rik=%2fDpNPNNZHTlzyA&riu=http%3a%2f%2fwww.laptop-battery.co%2fcardimage_big%2fHD-DV.jpg&ehk=cQokYG8ORyshCXSsGcYM83WWRMwgQTEQr2wwrxg5XnI%3d&risl=&pid=ImgRaw&r=0"
    };
    const [orderedProduct , setorderedProduct]=useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name"/>
    <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                            <ReactImageZoom{...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15 ">
                        <div>
                            <img src="https://th.bing.com/th?id=OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                             className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://th.bing.com/th?id=OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://th.bing.com/th?id=OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            className="img-fluid" alt="" />
                        </div>
                        <div>
                            <img src="https://th.bing.com/th?id=OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-bottom">
                            <h3 className="title">Kids Headphone Bulk 10 Pack Multi Colored For Student</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className='price'>Rs. 4000</p>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                                count={5} 
                                size={24} 
                                value={4} 
                                edit={false} 
                                activeColor="#ffd700"
                            />
                            <p className="mb-0 t-review">(2 Reviews)</p>

                            </div>
                            <a className='review-btn' href="#review">Write a Review</a>
                        </div>
                        <div className="py-3">
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Type :</h3> 
                                <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Brand :</h3> 
                                <p className="product-data">Havells</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Cateogry :</h3>
                                <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Tags :</h3> 
                                <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Availability :</h3> 
                                <p className="product-data">In Stock</p>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                <h3 className="product-heading">Size :</h3> 
                                <div className="d-flex flex-wrap gap-15">
                                    <span className="badge border border-1 text-dark border-secondary">S</span>
                                    <span className="badge border border-1 text-dark border-secondary">M</span>
                                    <span className="badge border border-1 text-dark border-secondary">L</span>
                                    <span className="badge border border-1 text-dark border-secondary">XL</span>
                                </div>
                            </div>
                            <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                <h3 className="product-heading">Color :</h3> 
                                <Color/>
                            </div>
                            <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                <h3 className="product-heading">Quantity :</h3> 
                                <div>
                                    <input type="number" 
                                    name="" 
                                    id=""
                                    min={1}
                                    max={10}
                                    style={{width:"70px"}}
                                    className="form-control"
                                    />
                                </div>
                                <div className="d-flex align-items-center gap-30 ms-5">
                                    <button className="button border-0" type='submit'>Add To Cart</button>
                                    <button className="button signup">Buy It Now</button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div>
                                    <a href=""> <AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                                </div>
                                <div>
                                    <a href=""> <BiGitCompare className='fs-5 me-2'/> Add to Comapre</a>
                                </div>
                            </div>
                            <div className="d-flex gap-10 flex-column my-3 ">
                                <h3 className="product-heading">Shipping & Returns :</h3> 
                                <p className="product-data">
                                    Free shipping and returns available on all orders<br/>
                                    We ship all Indian domestic order within <b>5-10 business days!</b>
                                </p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-3 ">
                                <h3 className="product-heading">Product Link :</h3> 
                                <a href="javascript:void(0)" onClick={() =>
                                    {copyToClipboard("https://th.bing.com/th/id/R.54c9e079f75b561a00616031fd34eb8e?rik=%2fDpNPNNZHTlzyA&riu=http%3a%2f%2fwww.laptop-battery.co%2fcardimage_big%2fHD-DV.jpg&ehk=cQokYG8ORyshCXSsGcYM83WWRMwgQTEQr2wwrxg5XnI%3d&risl=&pid=ImgRaw&r=0");
                                    }}>Copy Link</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h4>Description</h4>
                    <div>                      
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident, repellendus eveniet. Non delectus unde facilis nesciunt 
                            mollitia! Ducimus debitis harum ex animi quo, nostrum nobis earum quam, 
                            impedit doloribus iste!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="review-wrapper home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 id="review">Reviews</h3>
                    <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className="d-flex gap-10 align-items-center">
                                    <ReactStars
                                        count={5} 
                                        size={24} 
                                        value={4} 
                                        edit={false} 
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0">Based on 2 Reviews</p>
                                </div>
                            </div>
                            {
                                orderedProduct && (
                                <div>
                                    <a href="" className="text-dark text-decoration-underline">Write a Review</a></div>
                                )
                            }
                        </div>
                        <div className="review-form py-4">
                            <h4>Write a Review</h4>
                            <form action="" className="d-flex flex-column gap-15">
                                <ReactStars
                                    count={5} 
                                    size={24} 
                                    value={4} 
                                    edit={true} 
                                    activeColor="#ffd700"
                                />
                               
                                <div>
                                    <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="button border-0">Submit Review</button>
                                </div>
                            </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                    <h6 className='mb-0'>Shubham</h6>
                                    <ReactStars
                                        count={5} 
                                        size={24} 
                                        value={4} 
                                        edit={false} 
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className='mt-3'> 
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis provident 
                                    impedit architecto suscipit sapiente magni harum consectetur voluptatum asperiores 
                                    labore eos ipsam modi, unde deserunt qui officiis fuga nam.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
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
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct