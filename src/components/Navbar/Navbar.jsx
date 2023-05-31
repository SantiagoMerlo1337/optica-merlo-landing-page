import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'


export default function Navbar({img}) {
    return (
        <nav className="navbar navbar-expand-md py-3 px-0 px-sm-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className='logo' src={img} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                    <button className='btn ms-2 ms-lg-0 mt-2 mt-lg-0'>Contactanos</button>
                </div>
            </div>
        </nav>
    )
}