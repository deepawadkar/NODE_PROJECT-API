import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-theme">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">MERN-PROJECT</NavLink>

                <button className='btn btn-secondary' data-bs-target="#menu" data-bs-toggle="offcanvas">
                    <i className='bi bi-list'></i>
                </button>
            </div>
        </nav>
        {/* offcanvas menu */}
        <div className="offcanvas offcanvas-end" tabIndex={'-1'} id='menu'>
            <div className="offcanvas-header">
                <h6 className="text-dark display-6 offcanvas-title">MERN-PROJECT</h6>
                <button data-bs-dismiss="offcanvas" className='btn-close'/>
            </div>
            <div className="offcanvas-body">
                <div className="list-group text-center mt-2 mb-2" >
                    <NavLink to={'/'} className="list-group-item">Home</NavLink>
                    <NavLink to={'/about'} className="list-group-item">About</NavLink>
                    <NavLink to={'/contact'} className="list-group-item">Contact</NavLink>
                    <NavLink to={'/login'} className="list-group-item">Login</NavLink>
                    <NavLink to={'/register'} className="list-group-item">Register</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Menu