import { NavbarLink, SocialMedia } from "../../types";

export const navbarLinks: NavbarLink[] = [
    {
        route: "/",
        label: "Inicio",
    },
    {
        route: "/community",
        label: "Marcas",
    },
    {
        route: "/filtros",
        label: "Filtros",
    },
    {
        route: "/contacto",
        label: "Contactanos",
    },
];

export const socialMedia: SocialMedia[] = [
    {
        url: "/",
        label: "WhatsApp",
        imgUrl: "/assets/icons/whatsapp.png"
    },
    {
        url: "/",
        label: "Instagram",
        imgUrl: "/assets/icons/instagram.png"
    },
    {
        url: "/",
        label: "Facebook",
        imgUrl: "/assets/icons/facebook.png"
    },
];