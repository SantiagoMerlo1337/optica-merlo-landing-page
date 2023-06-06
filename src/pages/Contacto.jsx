import Header from '../components/Header/Header.jsx'
import TextBand from '../components/TextBand/TextBand.jsx'
import '../styles/pages/Contacto.css'
//Assets


export default function Contacto() {
  return (
    <>
      <Header title='Nuestras redes sociales y ubicación'/>
      <TextBand text='¡Contactanos!' />

      <main>
        <div className="container">
          <div className="row">
            <ul className="col-12 list-unstyled d-flex justify-content-center gap-5">
              <li><i className="bi bi-whatsapp fs-1 px-3 text-white bg-dark rounded"/></li>
              <li><i className="bi bi-instagram fs-1 px-3 text-white bg-dark rounded"/></li>
              <li><i className="bi bi-facebook fs-1 px-3 text-white bg-dark rounded"/></li>
            </ul>
          
            <div className="col-12 text-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.865926374165!2d-61.49296722451581!3d-31.2521346743379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae45c2216e65%3A0x3e72d28866ef1584!2sOptica%20Merlo!5e0!3m2!1ses!2sar!4v1686087473259!5m2!1ses!2sar" 
                className="gmaps-contacto"
                allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}