import React from 'react'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'
import Carousel from '../components/Carousel/Carousel.jsx'
import CarouselRB from 'react-bootstrap/Carousel'

//Assets
import filtrosJson from '../assets/data/filtros.json'

export default function Filtros() {
  return (
    <>
      <Header title='Filtros disponibles'/>
      <TextBand text='¡Visitanos a nuestro local con tu receta para adquirirlos!'/>
      <main>
        <CarouselRB>
          {filtrosJson.map((item, index) => {
            console.log(item); 
            return <Carousel key={index} item={item} />;
          })}
        </CarouselRB>
      </main>
    </>
  )
}
