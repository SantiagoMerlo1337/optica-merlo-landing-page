import { navbarLinks } from "@/components/constants";
import Card from "@/components/shared/Card";
import Header from "@/components/shared/Header";

const marcasHref = navbarLinks[1].route
const filtrosHref = navbarLinks[2].route

const Home = () => {
    return (
        <>
            <Header
                title="La Óptica que siempre buscaste en Rafaela"
                desc="Especialistas en lentes multifocales, lentes de contacto, anteojos recetados y protectores para sol."
                imgUrl="/assets/images/lentes-header.png"
                tag="¿Qué estas buscando?"
            />

            <section className="container grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-14 w-full md:w-5/6 lg:w-full my-10">
                <Card title="LENTES DE RECETA" desc="Contamos con filtros de luz azul, antirreflejos, complex, y mucho más." imgAlt="Lentes de receta imagen" imgUrl="/assets/icons/los-anteojos.png" hrefLink="/filtros"/>
                <Card title="LENTES DE SOL" desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más." imgAlt="Lentes de sol imagen" imgUrl="/assets/icons/gafas-de-sol.png" hrefLink="/marcas"/>
                <Card title="LENTES DE CONTACTO" desc="Ofrecemos una amplia variedad de lentes de contacto, incluyendo lentes diarios, mensuales y especializados." imgAlt="Lentes de contacto imagen" imgUrl="/assets/icons/lentes-de-contacto.png" hrefLink="/lentes-de-contacto"/>
                <Card title="ACCESORIOS DE ÓPTICA" desc="Encuentra líquidos refrescantes, lubricantes y otros accesorios esenciales para el cuidado de tus lentes." imgAlt="Accesorios de óptica imagen" imgUrl="/assets/icons/accesorios-optica.png" hrefLink="/accesorios"/>
            </section>    

        {/* <section className="container grid grid-cols-1 md:grid-cols-2 gap-24 my-6">
            <Card title="LENTES DE RECETA" desc="Contamos con filtros de luz azul, antirreflejos, complex, y mucho más." hrefLink={filtrosHref} imgAlt="Modelo con lentes de receta" imgUrl="/assets/images/modelo1.jpg"/>
            <Card title="LENTES DE SOL" desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más." hrefLink={marcasHref} imgAlt="Modelo con lentes de receta" imgUrl="/assets/images/modelo2.jpg"/>
        </section> */}
        </>
    );
};

export default Home;
