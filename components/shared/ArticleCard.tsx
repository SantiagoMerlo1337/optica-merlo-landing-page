import { ArticlesInfo } from "@/types";
import Image from "next/image";

const ArticleCard = ({imgUrl, imgAlt, title, desc, size}: ArticlesInfo) => {
  return (
    <article className="bg-white w-72 px-3 py-4 rounded-xl shadow-md text-gray-900 h-[520px] flex flex-col">
        <Image className="w-72 h-72 mx-auto object-contain p-4" src={imgUrl} width={300} height={300} alt={imgAlt} loading="lazy"/>
        <hr className="my-2"/>
        <div className="flex-grow">
            <div className="">
                <h4 className="base-semibold mb-1">{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
            <p className="italic text-gray-600">{size}</p>
    </article>
  )
}

export default ArticleCard