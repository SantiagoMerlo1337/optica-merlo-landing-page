import React from 'react'
import './TextBand.css'

export default function TextBand({text}) {
  return (
    <div className='w-100 container-textband'>
        <div className='container d-flex justify-content-center py-2'>
            <h4 className='fs-3 m-0 text-white'>{text}</h4>
        </div>
    </div>
  )
}