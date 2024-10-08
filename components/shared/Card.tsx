import Image from "next/image";
import Link from "next/link";

interface Props {
    imgUrl: string;
    imgAlt: string;
    hrefLink: string;
    title: string;
    desc: string;
}
const Card = ({ imgUrl, imgAlt, hrefLink, title, desc }: Props) => {
    return (
        <Link
            href={hrefLink}
            className="hover:scale-105 ease-in-out duration-100 w-[600px]"
        >
            <article className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between bg-white rounded-xl py-8 px-4 text-gray-900 h-full shadow-xl hover:shadow-2xl gap-4">
                <div className="m-0 lg:me-6 text-center lg:text-start">
                    <p className="h5-semibold mb-2">{title}</p>
                    <p className="base-regular">{desc}</p>
                </div>
                <Image
                    className="bg-black/10 rounded-full p-2 object-contain"
                    alt={imgAlt}
                    src={String(imgUrl)}
                    width={120}
                    height={120}
                />
            </article>
        </Link>
    );
};
export default Card;
