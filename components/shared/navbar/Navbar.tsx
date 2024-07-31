import Image from "next/image";
import Link from "next/link";
import logoNavbar from "@/public/assets/images/logo-desc-unalinea.png";
import { navbarLinks } from "../../constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <nav className="flex items-center py-4 px-8 md:px-10 lg:px-14 bg-white">
            <Link
                href={navbarLinks[0].route}
                className="flex-shrink-0 py-1 me-4"
            >
                <Image src={logoNavbar} alt="Logo Optica Merlo" width={230} />
            </Link>
            <div className="flex-between w-full ms-6 md:ms-8 lg:ms-16">
                <ul className="gap-6 hidden md:flex">
                    {navbarLinks.map((item) => {
                        if (item.label !== "Contactanos") {
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.route}
                                        className="font-semibold px-3 py-2 hover:bg-primary-500/5 rounded text-primary-800/80 hover:text-primary-800"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>

                {navbarLinks.map((item) => {
                    if (item.label === "Contactanos") {
                        return (
                            <Link
                                key={item.label}
                                href={item.route}
                                className="btn hidden md:flex"
                            >
                                {item.label}
                            </Link>
                        );
                    }
                })}
            </div>
            <MobileNav />
        </nav>
    );
};

export default Navbar;
