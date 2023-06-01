import React from 'react'
import './ItemCard.css'

export default function ItemCard({item}) {
  return (
    <article className='w-100'>
        <img src={item.src} alt={'Logo ' + item.text} className='img-itemcard p-3 text-white' loading='lazy'/>
        <p className='text-light text-center mb-0 mt-1'>{item.text}</p>
    </article>
  )
}