import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

//Assets
import logoNavbar from '/src/assets/img/logo-desc-unalinea.png'

export default function Navbar() {
    return (
        <nav className="navbar bg-white navbar-expand-md py-3 px-0 px-sm-5">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img className='logo' src={logoNavbar} alt="Logo" />
                </Link>
                <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-2 gap-lg-4">
                        <li className="nav-item ms-0 ms-lg-5">
                            <Link to='/' className='nav-link px-3 rounded mt-3 mt-md-0'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/marcas' className='nav-link px-3 rounded'>Marcas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/filtros' className='nav-link px-3 rounded'>Filtros</Link>
                        </li>
                    </ul>
                    <Link to='/contacto'>
                        <button className='btn btn-primary ms-2 ms-md-0 mt-2 mt-md-0'>Contactanos</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}