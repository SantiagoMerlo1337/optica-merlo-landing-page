import Image from "next/image";

interface Props {
    title: string;
    desc?: string;
    imgUrl?: string;
    tag: string;
}

const Header = ({ title, desc, imgUrl, tag }: Props) => {
    if (desc && imgUrl) {
        return (
            <>
                <div className="background-custom2-gradient text-white">
                    <div className="container grid grid-cols-1 lg:grid-cols-2 py-8 text-center md:text-start">
                        <div className="">
                            <h2 className="h1-bold">{title}</h2>
                            <h3 className="h5-regular mt-2"> {desc}</h3>
                        </div>
                        <div className="justify-end items-center hidden lg:flex">
                            <Image
                                src={String(imgUrl)}
                                width={300}
                                height={300}
                                alt="Lentes vector png"
                                className="invert-colors"
                            />
                        </div>
                    </div>
                <div className="text-white bg-black/30">
                    <p className="h5-regular py-2 text-center">{tag}</p>
                </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="background-custom2-gradient text-white">
                    <div className="container py-8 text-center md:text-start">
                        <h2 className="h1-bold">{title}</h2>
                    </div>
                <div className="text-white bg-black/30">
                    <p className="h5-regular py-2 text-center">{tag}</p>
                </div>
                </div>
            </>
        );
    }
};

export default Header;
