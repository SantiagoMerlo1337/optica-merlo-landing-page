"use client";
import Header from "@/components/shared/Header";
import { usePathname } from "next/navigation";
import { headerInfo } from "@/components/constants";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const info = headerInfo.find((info) => info.route == pathname);

    if (!info) {
        // Manejar el caso cuando no se encuentra la información para la ruta
        console.error(`No header info found for the route: ${pathname}`);
        return (
            <div>
                <p>Error: No header info found for the route: {pathname}</p>
            </div>
        );
    }

    const title = info?.title || "Default Title";
    const desc = info?.desc || "Default Description";
    const imgUrl = info?.imgUrl || "default-image-url";
    const tag = info?.tag || "default-tag";

    if (info.imgUrl && info.desc) {
        return (
            <>
                <Header title={title} desc={desc} imgUrl={imgUrl} tag={tag} />
                <main className="container my-12">{children}</main>
            </>
        );
    } else {
        return (
            <>
                <Header title={title} tag={tag} />
                <main className="container my-12">{children}</main>
            </>
        );
    }
};

export default Layout;
