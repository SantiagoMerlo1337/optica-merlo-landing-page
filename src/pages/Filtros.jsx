import React from 'react'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'

//Assets
import filtrosJson from '../assets/data/filtros.json'

export default function Filtros() {
  return (
    <>
      <Header title='Filtros disponibles'/>
      <TextBand text='¡Visitanos a nuestro local con tu receta para adquirirlos!'/>
      <main>
        <div className="bg-primary">
            <h3 className="text-center pt-4 text-white fw-bolder" >-Filtros / Tratamientos-</h3>
            <div className="d-flex justify-content-center pt-2 pb-4">    
                <Carousel
                item={filtrosJson}
                />
            </div>
        </div>
      </main>
    </>
  )
}
