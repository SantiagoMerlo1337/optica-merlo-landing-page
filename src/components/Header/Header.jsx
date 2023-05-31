import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

export default function Header({title, desc, img = null}) {
  if (img!=null){
    return (
      <section className='header-section text-light'>
        <div className="container py-4 text-center text-sm-start">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2 className='fs-titulo'>{title}</h2>
              <h3 className='fs-4'>{desc}</h3>
            </div>
            <div className="col-0 col-lg-6 d-none d-lg-flex justify-content-end">
              <img className='img-header' src={img} alt="lentes" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  else{
    return(
      <section className='header-section text-light'>
        <div className="container py-4">
          <h2 className='fs-titulo'>{title}</h2>
          <h3 className='fs-4'>{desc}</h3>
        </div>
      </section>
    )
  }
}