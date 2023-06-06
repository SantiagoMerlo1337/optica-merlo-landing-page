import Card from '../components/Card/Card.jsx'
import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'

import {Link} from 'react-router-dom'

//Assets
import lentesHeader from '/src/assets/img/lentes-header.png'
import imgModelo1 from '/src/assets/img/modelo1.jpg'
import imgModelo2 from '/src/assets/img/modelo2.jpg'

export default function Inicio() {
  return (
    <>
        <Header
          title='La Óptica que siempre buscaste en Rafaela' 
          desc='Especialistas en lentes multifocales, lentes de contacto, anteojos recetados y protectores para sol.'
          img= {lentesHeader}
        />

        <TextBand text='¿Qué estas buscando?'/>

        <main className='m-0 p-0'>
            <div className="container py-3 ">
              <div className="row gap-3 gap-md-0">
                  <div className="col-12 col-md-6">
                    <Link to='/filtros' className='text-dark text-decoration-none'>
                      <Card img={imgModelo2} 
                      title='LENTES DE RECETA'
                      desc='Contamos con filtros de luz azul, antirreflejos, ambos filtros combinados, y mucho más.'/>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to='/marcas' className='text-dark text-decoration-none '>
                      <Card img={imgModelo1} 
                      title='LENTES DE SOL'
                      desc='Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más.'/>
                    </Link>
                  </div>
              </div>
            </div>
        </main>
    </>
  )
}