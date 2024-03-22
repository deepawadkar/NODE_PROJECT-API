import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

function Register() {
  const [user,setUser] =useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  })

  const navigate = useNavigate()

  const readvalue = (e) => {
    const {name , value } = e.target
    setUser({...user, [name]:value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      console.log(`new user =`, user)

      await axios.post(`/api/auth/register`, user)
      .then(res => {
        toast.success(res.data.msg)
        navigate(`/login`)
      }).catch(err => toast.error(err.response.data.msg))
    }catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <div className="container d-flex align-items-center justify-content-center mt-3" style={{height: '100vh'}}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
              <img src={`${process.env.PUBLIC_URL}/signup.svg`} alt="" className='img-fluid' />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form autoComplete='off' onSubmit={submitHandler}>
                    <div className="form-group mt-2">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name"  value={user.name} onChange={readvalue} className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" value={user.email} onChange={readvalue} className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="mobile">Mobile</label>
                      <input type="text" name="mobile" id="mobile" value={user.mobile} onChange={readvalue} className='form-control'maxLength={10} minLength={10} required />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" value={user.password} onChange={readvalue} className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                      <input type="submit" value='Signup'  className='btn bg-theme text-white' required />
                    </div>
                  </form>
                  <NavLink to={`/login`} className={"text-theme float-end"}>
                    Already registered? Login Here..
                  </NavLink>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register