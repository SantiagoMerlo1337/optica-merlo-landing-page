import Image from "next/image";
import Link from "next/link";

interface Props{
    imgUrl: string;
    imgAlt: string;
    hrefLink?: string;
    title:string;
    desc:string;
    
}
const Card = ({imgUrl, imgAlt, hrefLink, title, desc}:Props) => {

    if(hrefLink){
        return (
            <article className="w-full">
                <Link href={hrefLink}>
                    <Image width={704} height={400} alt={`${imgAlt}`} src={String(imgUrl)} className="h-96 object-cover rounded-t-3xl"/>
                    <div className="bg-white py-4 px-2 rounded-b-3xl text-gray-900">
                        <h4 className="text-center mb-1 h5-bold">{title}</h4>
                        <hr />
                        <p className="mt-4 text-center base-regular">{desc}</p>
                    </div>
                </Link>
            </article>
        )
    } else {
        return <p>ERROR</p>
    }
}

export default Card