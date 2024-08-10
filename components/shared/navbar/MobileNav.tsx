"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/components/constants";
import { opticaImages } from "@/components/constants/images";
import { icons } from "@/components/constants/icons";

const NavContent = () => {
    return (
        <section className="flex h-full flex-col gap-4 pt-14">
            <Image
                className="ms-1"
                src={opticaImages.logo}
                width={32}
                height={32}
                alt="Optica Merlo logo"
            />
            {navbarLinks.map((item) => {
                if (item.label != "Contactanos") {
                    return (
                        <SheetClose asChild key={item.route}>
                            <Link
                                href={item.route}
                                className="bg-primary-500/5 w-auto rounded"
                            >
                                <p className="font-semibold px-3 py-2 hover:bg-primary-500/5 rounded text-primary-800/80 hover:text-primary-800">
                                    {item.label}
                                </p>
                            </Link>
                        </SheetClose>
                    );
                } else {
                    return (
                        <SheetClose asChild key={item.route}>
                            <Link href={item.route} className="btn text-center">
                                <p className="">{item.label}</p>
                            </Link>
                        </SheetClose>
                    );
                }
            })}
        </section>
    );
};

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src={icons.hamburger}
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors xl:hidden "
                />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white border-none">
                <div>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
