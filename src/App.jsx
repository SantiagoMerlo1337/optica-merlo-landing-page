import React from 'react';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'

//Pages
import Inicio from './pages/Inicio.jsx'
import Marcas from './pages/Marcas.jsx'
import Filtros from './pages/Filtros.jsx'

//Components
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

//Assets
import logoNavbar from './assets/logo-desc-unalinea.png'
import logoFooter from './assets/logo-png.png'


function App() {

  return (
    <>
        <Navbar img={logoNavbar} />
        
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/marcas' element={<Marcas/>} />
            <Route path='/filtros' element={<Filtros/>} />
        </Routes>

        <Footer imgLogo={logoFooter} />
    </>
  )
}

export default App;