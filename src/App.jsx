import React from 'react';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './styles/sass/bootstrap-custom.css'
import './styles/App.css'

//Pages
import Inicio from './pages/Inicio.jsx'
import Marcas from './pages/Marcas.jsx'
import Filtros from './pages/Filtros.jsx'
import Contacto from './pages/Contacto.jsx'

//Components
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  return (
    <>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/marcas' element={<Marcas/>} />
            <Route path='/filtros' element={<Filtros/>} />
            <Route path='/contacto' element={<Contacto/>} />
        </Routes>

        <Footer />
    </>
  )
}

export default App