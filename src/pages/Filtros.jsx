import React, { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'

//Assets
import filtrosJson from '../assets/data/filtros.json'
import tipoFocalesJson from '../assets/data/tipo-focal.json'

export default function Filtros() {

  return (
    <>
      <Header title='Filtros disponibles'/>
      <TextBand text='¡Visitanos a nuestro local con tu receta para adquirirlos!'/>
      <main>
        <div className="py-4">
          <h5 className='fs-1 text-light text-center fw-lighter'>•TRATAMIENTOS•</h5>
          <div className="d-flex justify-content-center">    
              <Carousel
              item={filtrosJson}
              nroCarousel={1}
              />
          </div>
        </div>
        <div className="py-4">
          <h5 className='fs-1 text-light text-center fw-lighter'>•DISTANCIA FOCALES•</h5>
          <div className="d-flex justify-content-center">    
              <Carousel
              item={tipoFocalesJson}
              nroCarousel={2}
              />
          </div>
        </div>
      </main>
    </>
  )
}
