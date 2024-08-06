import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Filtros = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-7 md:mx-24 gap-8 lg:gap-40">
                <Carousel>
                    <h3 className="text-center h5-semibold mb-2 bg-primary-500/90 text-white py-2 rounded shadow-lg">
                        Tratamientos
                    </h3>
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/luz-azul.jpg"
                                width={760}
                                height={270}
                                alt="Filtro luz azul"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Luz Azul</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Protege la vista de la luz azul que emite
                                    las pantallas.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/antirreflejo.jpg"
                                width={760}
                                height={270}
                                alt="Filtro antirreflejo"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">
                                    Antirreflejo
                                </h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Elimina los reflejos de luz producidos
                                    artificial o naturalmente que dificultan ver
                                    de forma correcta.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/fotocromatico.jpg"
                                width={760}
                                height={270}
                                alt="Filtro fotocromático"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">
                                    Fotocromático
                                </h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Lentes transparentes en interiores, pero se
                                    oscurecen al estar en ambientes luminosos.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/complex.jpg"
                                width={760}
                                height={270}
                                alt="Filtro complex"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Complex</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Lentes livianas, hidrofóbicas, resistentes,
                                    filtro luz azul, estéticas, antirreflejo y
                                    asféricas.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/adaptec-vuble.jpg"
                                width={760}
                                height={270}
                                alt="Filtro adaptec vuble"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">
                                    Adaptec Vuble
                                </h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Combinación de los siguientes filtros:
                                    antirreflejos, luz azul y fotocromático.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/antirraya.jpg"
                                width={760}
                                height={270}
                                alt="Tratamiento antirraya"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Antirraya</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    ¡Protege las lentes de los rayones
                                    involuntarias!
                                </p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="background-custom2-gradient text-white" />
                    <CarouselNext className="background-custom2-gradient text-white" />
                </Carousel>

                <Carousel>
                    <h3 className="text-center h5-semibold mb-2 bg-primary-500/90 text-white py-2 rounded shadow-lg">
                        Distancias focales
                    </h3>
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/monofocal.jpg"
                                width={760}
                                height={270}
                                alt="Monofocal"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Monofocal</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Misma graduación en toda su superficie.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/bifocal.jpg"
                                width={760}
                                height={270}
                                alt="Bifocal"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Bifocal</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Dos graduaciones en las mismas gafas: la de
                                    lejos y la de cerca.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/multifocal.jpg"
                                width={760}
                                height={270}
                                alt="Multifocal"
                            />
                            <div className="bg-white py-4 px-2 h-full rounded-b text-center text-gray-900">
                                <h4 className="h5-semibold mb-2">Multifocal</h4>
                                <hr className="mb-2" />
                                <p className="base-regular">
                                    Progresividad en dos graduaciones,
                                    permitiendo el enfoque de distancias
                                    lejanas, medias y cercanas.
                                </p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="background-custom2-gradient text-white" />
                    <CarouselNext className="background-custom2-gradient text-white" />
                </Carousel>
            </div>
        </>
    );
};

export default Filtros;
