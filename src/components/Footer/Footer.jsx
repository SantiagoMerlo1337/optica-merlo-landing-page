import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

//Assets
import logoFooter from '/src/assets/img/logo-png.png'


export default function Footer() {
  return (
    <footer className='footer-footer text-light'>
        <div className="container">
            <div className="row pt-5">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h5>Sobre el Sitio</h5>
                    <div className='text-footer fw-light'>
                        <p>
                            En Óptica Merlo nos preocupamos por tu calidad de visión. 
                            En el sitio encontrarás las marcas con las que trabajamos, distintos formatos y tratamientos de lentes. 
                        </p>
                        <p>¡Visitanos a nuestro local! <strong>Lavalle 90</strong></p>
                    </div>
                </div>

                {/* <div className="col-12 col-md-4 text-center">
                    <h5>Links</h5>
                    <div className='text-footer fw-light '>
                        <Link to='/' className='text-decoration-none text-light'>Inicio </Link>
                        <Link to='/marcas' className='text-decoration-none text-light'>Marcas </Link>
                        <Link to='/filtros' className='text-decoration-none text-light'>Filtros </Link>
                    </div>
                </div> */}

                <div className="col-12 col-md-6 text-center text-md-end">
                    <ul className='d-flex gap-4 list-unstyled justify-content-center justify-content-md-end'>
                        <li><i class="bi bi-whatsapp fs-2"></i></li>
                        <li><i class="bi bi-instagram fs-2"></i></li>
                        <li><i class="bi bi-facebook fs-2"></i></li>
                    </ul>
                    <h5 className='text-footer fw-light'>Cualquier consulta escribinos al <strong>WhatsApp</strong></h5>
                </div>
            </div>
            <p className='text-center mt-3'>Copyright © Óptica Merlo</p>    
        </div>
        <div className="d-flex justify-content-center pb-4 pt-2">
            <img className='logo-footer text-center' src={logoFooter} alt="Logo Optica Merlo" />
        </div>
    </footer>
  )
}