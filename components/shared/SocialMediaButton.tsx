import { SocialMedia } from '@/types'
import Image from 'next/image'
import Link from 'next/link'



const SocialMediaButton = ({url, label, imgUrl, otherClasses}: SocialMedia) => {
    return (
        <Link className={`flex-center gap-2 py-2 px-3 rounded w-56 ${otherClasses}`} href={url} target="_blank">
            <Image className="invert" src={imgUrl} alt={`${label} Logo`} width={32} height={32}/>
            <p className="my-auto h5-semibold text-white">{label}</p>
        </Link>
    )
}

export default SocialMediaButton