import React from 'react'
import './Card.css'

export default function Card({img, title, desc}) {
    return (
        <article className="card-card">
            <img className="card-img-top img-card" src={img}  alt="Imagen"/>
            <div className="card-body p-4 text-center">
                <p className="card-text mb-0 title-card fs-3">{title}</p>
                <hr className='mt-1 mb-2' />
                <p className="card-text fs-5">{desc}</p>
            </div>
        </article>
    )
}