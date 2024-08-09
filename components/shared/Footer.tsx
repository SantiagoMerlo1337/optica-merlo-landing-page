import Image from "next/image";
import { socialMedia } from "../constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-white background-custom-gradient pb-8 pt-4">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                    <div className="text-center md:text-start">
                        <h5 className="base-regular mb-2">Sobre el Sitio</h5>
                        <div>
                            <p>
                                En Óptica Merlo nos preocupamos por tu calidad
                                de visión. En el sitio encontrarás las marcas
                                con las que trabajamos, distintos formatos y
                                tratamientos de lentes.
                            </p>
                            <p>
                                ¡Visitanos a nuestro local!{" "}
                                <strong>Lavalle 90, Rafaela, Santa Fe</strong>
                            </p>
                        </div>
                    </div>

                    <div className="text-end">
                        <ul className="flex gap-4 justify-center md:justify-end mb-4">
                            {socialMedia.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.url} target="_blank">
                                        <Image
                                            width={36}
                                            height={36}
                                            className="invert-colors"
                                            alt={`${item.label}} icon`}
                                            src={String(item.imgUrl)}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h5 className="text-center md:text-end hidden md:block">
                            Cualquier consulta escribinos al{" "}
                            <strong>WhatsApp</strong>
                        </h5>
                    </div>
                </div>
                <p className="text-center mt-6">Copyright © Óptica Merlo</p>
            </div>
            <div className="flex-center mt-6">
                <Image
                    width={32}
                    height={32}
                    alt="Optica Merlo logo"
                    src="/assets/images/logo-png.png"
                    className="invert-colors"
                />
            </div>
        </footer>
    );
};

export default Footer;
