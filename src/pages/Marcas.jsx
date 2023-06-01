import React from 'react'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'
import ItemCard from '../components/ItemCard/ItemCard.jsx'
import '../styles/pages/Marcas.css'
//Assets
import marcasJson from '/src/assets/data/marcas.json'


export default function Marcas() {
  return (
    <>
      <Header
      title='Marcas disponibles'
       />
      <TextBand
      text='¡Visitanos a nuestro local para adquirirlos!'
      />
      
      <main>
        <section className='container container-marcas'>
          {marcasJson.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </section>
      </main>
      
    </>
  )
}