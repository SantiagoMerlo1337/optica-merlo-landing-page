import { navbarLinks } from "@/components/constants";
import { illustrations } from "@/components/constants/images";
import Card from "@/components/shared/Card";

const filtrosHref = navbarLinks[1].route;
const marcasHref = navbarLinks[2].route;
const lentesContactoHref = navbarLinks[3].route;

const Home = () => {
    return (
        <>
            <section className="flex-center flex-wrap gap-14">
                <Card
                    title="LENTES DE RECETA"
                    desc="Contamos con filtros de luz azul, antirreflejos, fotocromáticos, complex, y mucho más."
                    imgAlt="Lentes de receta imagen"
                    imgUrl={illustrations.lentesContacto}
                    hrefLink={filtrosHref}
                />
                <Card
                    title="LENTES DE SOL"
                    desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más."
                    imgAlt="Lentes de sol imagen"
                    imgUrl={illustrations.lentesSol}
                    hrefLink={marcasHref}
                />
                <Card
                    title="LENTES DE CONTACTO"
                    desc="Ofrecemos variedad de lentes de contacto, incluyendo lentes diarios, multifocales, líquidos refrescantes, lubricantes y otros accesorios esenciales para el cuidado de los mismos."
                    imgAlt="Lentes de contacto imagen"
                    imgUrl={illustrations.lentesContacto}
                    hrefLink={lentesContactoHref}
                />
            </section>
        </>
    );
};

export default Home;
