import { navbarLinks } from "@/components/constants";
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
                    imgUrl="/assets/icons/los-anteojos.png"
                    hrefLink={filtrosHref}
                />
                <Card
                    title="LENTES DE SOL"
                    desc="Contamos con lentes de calidad premium de distintas marcas, armazones de nylon, metálicos, y mucho más."
                    imgAlt="Lentes de sol imagen"
                    imgUrl="/assets/icons/gafas-de-sol.png"
                    hrefLink={marcasHref}
                />
                <Card
                    title="LENTES DE CONTACTO"
                    desc="Ofrecemos variedad de lentes de contacto, incluyendo lentes diarios, multifocales, líquidos refrescantes, lubricantes y otros accesorios esenciales para el cuidado de los mismos."
                    imgAlt="Lentes de contacto imagen"
                    imgUrl="/assets/icons/lentes-de-contacto.png"
                    hrefLink={lentesContactoHref}
                />
            </section>
            {/* <Card
                title="ACCESORIOS DE ÓPTICA"
                desc="Encuentra líquidos refrescantes, lubricantes y otros accesorios esenciales para el cuidado de tus lentes."
                imgAlt="Accesorios de óptica imagen"
                imgUrl="/assets/icons/accesorios-optica.png"
                hrefLink="/accesorios"
            /> */}
        </>
    );
};

export default Home;
