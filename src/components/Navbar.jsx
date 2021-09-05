import React from 'react'
import { CartWidget } from './CartWidget'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">              
                <a class="navbar-brand" href="#">
                <img src="/humildad.svg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                    La humildad
                </a>
                <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav">
                        <a className="nav-link" href="">Home</a>
                        <a className="nav-link" href="">Tortas</a>
                        <a className="nav-link" href="">Sandwiches</a>
                        <a className="nav-link" href="">Catering</a>
                        <a className="nav-link" href="">Contacto</a>
                    </div>    
                </div>  
                <CartWidget />         
        </nav>
        </>
    )
}

export default Navbar
