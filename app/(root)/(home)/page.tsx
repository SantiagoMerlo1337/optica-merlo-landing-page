import { navbarLinks } from "@/components/constants";
import Card from "@/components/shared/Card";
import Header from "@/components/shared/Header";

const marcasHref = navbarLinks[1].route;
const filtrosHref = navbarLinks[2].route;

const Home = () => {
    return (
        <>
            <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-14 w-full lg:w-full">
                <Card
                    title="LENTES DE RECETA"
                    desc="Contamos con filtros de luz azul, antirreflejos, complex, y mucho más."
                    imgAlt="Lentes de receta imagen"
                    imgUrl="/assets/icons/los-anteojos.png"
                    hrefLink="/filtros"
                />
                <Card
                    title="LENTES DE SOL"
                    desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más."
                    imgAlt="Lentes de sol imagen"
                    imgUrl="/assets/icons/gafas-de-sol.png"
                    hrefLink="/marcas"
                />
                <Card
                    title="LENTES DE CONTACTO"
                    desc="Ofrecemos una amplia variedad de lentes de contacto, incluyendo lentes diarios, mensuales y especializados."
                    imgAlt="Lentes de contacto imagen"
                    imgUrl="/assets/icons/lentes-de-contacto.png"
                    hrefLink="/lentes-de-contacto"
                />
                <Card
                    title="ACCESORIOS DE ÓPTICA"
                    desc="Encuentra líquidos refrescantes, lubricantes y otros accesorios esenciales para el cuidado de tus lentes."
                    imgAlt="Accesorios de óptica imagen"
                    imgUrl="/assets/icons/accesorios-optica.png"
                    hrefLink="/accesorios"
                />
            </section>
        </>
    );
};

export default Home;
