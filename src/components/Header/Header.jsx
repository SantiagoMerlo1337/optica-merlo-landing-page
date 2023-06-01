import React from 'react'
import './Header.css'

export default function Header({title, desc = null, img = null}) {
  if (img!=null && desc!=null){
    return (
      <section className='bg-primary text-light'>
        <div className="container py-4 text-center text-sm-start">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2 className='fs-1 fw-bold'>{title}</h2>
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
      <section className='bg-primary text-light'>
        <div className="container py-4 text-center text-sm-start">
          <h2 className='fs-1 fw-bold m-0'>{title}</h2>
        </div>
      </section>
    )
  }
}