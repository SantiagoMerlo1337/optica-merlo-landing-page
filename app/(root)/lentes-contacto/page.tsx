import { articlesInfo } from "@/components/constants";
import { brandsImages } from "@/components/constants/images";
import ArticleCard from "@/components/shared/ArticleCard";
import Image from "next/image";

const LentesContacto = () => {
    return (
        <>
            <h3 className="text-center md:text-start h5-semibold mb-8 rounded text-gray-800">
                Marcas de lentes de contacto descartables
            </h3>
            <div className="flex-center md:justify-start gap-8 flex-wrap">
                <div className="flex-col bg-blue-800 rounded-xl p-4 w-56">
                    <Image className="object-contain mb-2 px-7 pt-2 h-10 w-full" src={brandsImages.acuvue} alt="Acuvue logo png" width={180} height={40}/>
                    <p className="text-white text-center">Oasis</p>
                </div>
                <div className="flex-col bg-teal-800 rounded-xl p-4 w-56">
                    <Image className="object-contain invert mb-2 px-2 pt-2 h-10 w-full" src={brandsImages.optix} alt="Air Optix logo png" width={180} height={40}/>
                    <p className="text-white text-center">HydraGlyde</p>
                </div>
                <div className="flex-col bg-purple-800 rounded-xl p-4 w-56">
                    <Image className="object-contain invert mb-2 pt-2 h-10 w-full" src={brandsImages.biofinity} alt="Biofinity logo png" width={180} height={40}/>
                    <p className="text-white text-center">Coopervision</p>
                </div>
                <div className="flex-col bg-pink-800 rounded-xl p-4 w-56">
                    <Image className="object-contain invert mb-2 px-3 pt-2 h-10 w-full" src={brandsImages.freshlook} alt="Freshlook logo png" width={180} height={40}/>
                    <p className="text-white text-center">Colorblends</p>
                </div>
            </div>
            <h3 className="text-center md:text-start h5-semibold mb-8 mt-10 rounded text-gray-800">
                Líquidos
            </h3>
            <section className="flex-center md:flex-start flex-wrap gap-6 jus">
                {
                    articlesInfo.map((article)=>(
                        <ArticleCard
                        key={article.title}
                        imgUrl={article.imgUrl}
                        imgAlt={article.imgAlt}
                        title={article.title}
                        desc={article.desc}
                        size={article.size}
                        />
                    ))
                }
            </section>
            
            
        </>
    );
};

export default LentesContacto;
