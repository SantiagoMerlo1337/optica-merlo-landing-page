import React from 'react';
import './Carousel.css'

export default function Carousel({ item }) {

    const buttons = btnsCarousel({ item });
    const images = imagesCarousel({ item });

    return (
        <div id="carouselExampleCaptions" className="carousel slide container-carousel">
            <div className="carousel-indicators">
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                        {button}
                    </React.Fragment>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((img, index) => (
                    <React.Fragment key={index}>
                        {img}
                    </React.Fragment>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    );   
}


//Coloca los botones necesarios para la visualizacion de cuantas imagenes hay y atajo rapido hacia ellas (debajo del texto las lineas)
function btnsCarousel({ item }) {
    const buttons = []

    for (let i = 0; i < item.length; i++) {
        const button = (
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i.toString()}
            aria-label={`Slide ${i + 1}`}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            />
        );
        buttons.push(button);
    }
    return buttons;
}


//Coloca los "componentes" con las imagenes y el texto del json
function imagesCarousel({item}) {
    const images = []

    
    for (let i = 0; i < item.length; i++) {
        var firstImage = (i===0) ? "active" : "" 

        const img = (
            <div className={"carousel-item " + firstImage}>
                <div className="degradee-carousel">
                    <div className="d-flex justify-content-center">
                        <img src={item[i].src} className="d-block w-100" alt="Filtro"/>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{item[i].title}</h5>
                        <p>{item[i].desc}</p>
                    </div>
                </div>
            </div>
        );
        images.push(img);
    }
    return images;
}