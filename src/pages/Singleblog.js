import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta"
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from "react-icons/hi"

const Singleblog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title="Dynamic Blog Name"/>
    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blog" className='d-flex gap-10 align-items-center'>
                        <HiOutlineArrowLeft/>Go Back to Blog</Link>
                        <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                        <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto, 
                            totam autem in eaque consectetur, quas maxime maiores numquam dicta 
                            laudantium perferendis amet odit magni accusantium dolor ut earum 
                            voluptatibus?
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Singleblog