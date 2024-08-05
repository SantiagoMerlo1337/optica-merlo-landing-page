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
            <div className="grid grid-cols-1 xl:grid-cols-2 mx-12 md:mx-36 lg:gap-40 gap-14">
                <Carousel>
                    <h3 className="text-center h5-semibold bg-primary-500 text-white mb-2 py-2 rounded shadow-lg">
                        Tratamientos
                    </h3>
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/luz-azul.jpg"
                                width={1500}
                                height={1500}
                                alt="Filtro luz azul"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Filtro antirreflejo"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Filtro fotocromático"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Filtro complex"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Filtro adaptec vuble"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Tratamiento antirraya"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                    <h3 className="text-center h5-semibold bg-primary-500 text-white mb-2 py-2 rounded shadow-lg">
                        Distancias focales
                    </h3>
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/assets/images/receta/monofocal.jpg"
                                width={1500}
                                height={1500}
                                alt="Monofocal"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Bifocal"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
                                width={1500}
                                height={1500}
                                alt="Multifocal"
                                className="rounded-t"
                            />
                            <div className="bg-white py-4 px-2 rounded-b text-center h-full text-gray-900">
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
