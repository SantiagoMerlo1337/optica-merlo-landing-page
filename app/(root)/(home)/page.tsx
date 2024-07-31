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

        <section className="container grid grid-cols-1 md:grid-cols-2 gap-24 my-6">
            <Card title="LENTES DE RECETA" desc="Contamos con filtros de luz azul, antirreflejos, ambos filtros combinados, y mucho más." hrefLink={filtrosHref} imgAlt="Modelo con lentes de receta" imgUrl="/assets/images/modelo1.jpg"/>
            <Card title="LENTES DE SOL" desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más." hrefLink={marcasHref} imgAlt="Modelo con lentes de receta" imgUrl="/assets/images/modelo2.jpg"/>
        </section>
        </>
    );
};

export default Home;
