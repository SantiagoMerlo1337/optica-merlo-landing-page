import { marcas } from "@/components/constants";
import Header from "@/components/shared/Header";
import Image from "next/image";

const Marcas = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-center">
                {marcas.map((item) => (
                    <article key={item.label} className="w-36">
                        <Image
                            src={item.imgUrl}
                            width={160}
                            height={160}
                            alt={`${item.label} logo`}
                            className="p-6 w-full background-custom2-gradient rounded-3xl"
                        />
                        <p className="text-gray-800 base-regular mt-2">
                            {item.label}
                        </p>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Marcas;
