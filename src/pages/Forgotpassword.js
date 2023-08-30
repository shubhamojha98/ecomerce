import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta"
import { Link } from 'react-router-dom'
const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"}/>
    <BreadCrumb title="Forgot Password"/>

    <div className="login-wrapper home-wrapper-2 py-3">
        <div className="conatiner-xxl">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset You Password</h3>
                    <p className="text-center mb-3 mt-2">
                        We will send you and email to reset your password
                    </p>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" name="email" 
                            placeholder='Email' className="form-control" />
                        </div>
                        <div>
                            <div className="mt-3 d-flex align-item-center justify-content-center gap-15">
                                <button type='submit' className="button border-0">Submit</button>
                            </div>
                            <div className="mt-3 align-item-center justify-content-center gap-15 d-flex">
                                    <Link to={"/login"}>Cancel</Link>
                             </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>

    
    </>
  )
}

export default Forgotpassword