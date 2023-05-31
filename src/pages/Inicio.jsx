import React from 'react'
import Card from '../components/Card/Card.jsx'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'

//Assets
import vectorLentes from '../assets/lentes-3.png'
import imgModelo1 from '../assets/modelo1.jpg'
import imgModelo2 from '../assets/modelo2.jpg'

function Home() {
  return (
    <>
        <Header
        title='La Óptica que siempre buscaste en Rafaela' 
        desc='Especialistas en lentes multifocales, lentes de contacto, anteojos recetados y protectores para sol.'
        img= {vectorLentes}/>

        <TextBand text='¿Qué estas buscando?'/>

        <main className='m-0 p-0'>
            <div className="container py-3">
            <div className="row gap-3 gap-md-0">
                <div className="col-12 col-md-6">
                <Card img={imgModelo2} 
                title='LENTES DE RECETA'
                desc='Contamos con filtros de luz azul, antirreflejos, ambos filtros combinados, y mucho más.'/>
                </div>
                <div className="col-12 col-md-6">
                <Card img={imgModelo1} 
                title='LENTES DE SOL'
                desc='Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más.'/>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default Home