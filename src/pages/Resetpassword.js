import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta"
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"}/>
    <BreadCrumb title="Reset Password"/>

    <div className="login-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                            <input type="password" name="password" 
                            placeholder='Password' className="form-control" />
                            </div>
                            <div className=''>
                                <input type="password" name='confpassowrd'
                                placeholder='Confirm Password' className="form-control" />
                            </div>
                            <div>
                                <div className="mt-3 d-flex align-item-center justify-content-center gap-15">
                                <button className="button border-0">Reset</button>
                                    
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

export default Resetpassword