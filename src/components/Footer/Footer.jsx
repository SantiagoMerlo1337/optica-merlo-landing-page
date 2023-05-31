import React from 'react'
import './Footer.css'

export default function Footer({imgLogo}) {
  return (
    <footer className='footer-footer text-light'>
        <div className="container">
            <div className="row pt-5">
                <div className="col-12 col-md-4">
                    <h5>Sobre el Sitio</h5>
                    <div className='text-footer fw-light'>
                        <p>
                            En Óptica Merlo nos preocupamos por tu calidad de visión. 
                            En el sitio encontrarás las marcas con las que trabajamos, junto con los tipos y tratamientos de lentes. 
                        </p>
                        <p>¡Visitanos a nuestro local! <strong>Lavalle 90</strong></p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <h5>Links</h5>
                    <h5 className='text-footer fw-light'>Inicio, Marcas, Filtros</h5>
                </div>
                <div className="col-12 col-md-4 text-end">
                    <ul className='d-flex gap-3 list-unstyled justify-content-end'>
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
            <img className='logo-footer text-center' src={imgLogo} alt="Logo Optica Merlo" />
        </div>
    </footer>
  )
}