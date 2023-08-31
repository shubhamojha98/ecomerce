import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid}=props;
    let location =useLocation();
  return (
    <> 
    <div className={`${location.pathname ==="/store"? `gr-${grid}` :"col-3"}`}>
        <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent '>
                <img src="/images/wish.svg" alt="wishlist" />
                </button>
            </div>
            <div className="product-image">
                <img src="/images/watch.jpg" className="img-fluid" alt="product img" />
                <img src="/images/watch-1.jpg" className="img-fluid" alt="product img" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havells</h6>
                <h5 className="product-title">
                    Kids Headphone Pack of 10
                </h5>
                <ReactStars
                    count={5} 
                    size={24} 
                    value={4} 
                    edit={false} 
                    activeColor="#ffd700"
                />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                    Kids headphone pack of 10 with Bass Boosted and 
                    Enviromental Noise Cancellation very good sound in 
                    Indoor and Outdoor.

                </p>
                <p className="price">
                    Rs 10000
                </p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'>
                    <img src="/images/prodcompare.svg" alt="compare" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="/images/view.svg" alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="/images/add-cart.svg" alt="addcart" />
                    </button>
                    
                </div>
            </div>
        </Link>
    </div>
    <div className={`${location.pathname ==="/store"? `gr-${grid}` :"col-3"}`}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src="/images/wish.svg" alt="wishlist" />
                </Link>
            </div>
            <div className="product-image">
                <img src="/images/watch.jpg" className="img-fluid" alt="product img" />
                <img src="/images/watch-1.jpg" className="img-fluid" alt="product img" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havells</h6>
                <h5 className="product-title">
                    Kids Headphone Pack of 10
                </h5>
                <ReactStars
                    count={5} 
                    size={24} 
                    value={4} 
                    edit={false} 
                    activeColor="#ffd700"
                />
                <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                    Kids headphone pack of 10 with Bass Boosted and 
                    Enviromental Noise Cancellation very good sound in 
                    Indoor and Outdoor.
                </p>
                <p className="price">
                    Rs 10000
                </p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'>
                    <img src="/images/prodcompare.svg" alt="compare" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="/images/view.svg" alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="/images/add-cart.svg" alt="addcart" />
                    </button>
                    
                </div>
            </div>
        </Link>
    </div>
    </>
  );
}

export default ProductCard