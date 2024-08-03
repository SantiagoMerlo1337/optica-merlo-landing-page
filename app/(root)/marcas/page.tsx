import { marcas } from '@/components/constants'
import Header from '@/components/shared/Header'
import Image from 'next/image'

const Marcas = () => {
  return (
    <>
        <Header title="Marcas disponibles" tag='¡Visitanos a nuestro local para adquirirlos!'/>
        <div className='container grid grid-cols-auto-custom text-center gap-10'>
            {
                marcas.map((item)=>(
                    <article key={item.label} className='w-40'>
                        <Image src={item.imgUrl} width={160} height={160} alt={`${item.label} logo`} className='p-6 w-full background-custom2-gradient rounded-3xl'/>
                        <p className='text-gray-800 base-regular mt-2'>{item.label}</p>
                    </article>
                ))
            }
        </div>
    </>
    
  )
}

export default Marcas