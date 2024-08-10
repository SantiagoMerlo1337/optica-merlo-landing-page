import { NavbarLink, SocialMedia, Marcas, HeaderInfo, ArticlesInfo } from "../../types";

export const navbarLinks: NavbarLink[] = [
    {
        route: "/",
        label: "Inicio",
    },
    {
        route: "/filtros",
        label: "Filtros",
    },
    {
        route: "/marcas",
        label: "Marcas",
    },
    {
        route: "/lentes-contacto",
        label: "Lentes de Contacto",
    },
    {
        route: "/contacto",
        label: "Contactanos",
    },
];

export const headerInfo: HeaderInfo[] = [
    {
        route: "/",
        title: "La Óptica que siempre buscaste en Rafaela",
        desc: "Especialistas en lentes multifocales, lentes de contacto, anteojos recetados y protectores para sol.",
        tag: "¿Qué estas buscando?",
        imgUrl: "/assets/images/lentes-header.png",
    },
    {
        route: "/filtros",
        title: "Filtros y marcos",
        tag: "¡Vení a nuestro local para adquirirlos!",
    },
    {
        route: "/marcas",
        title: "Marcas disponibles",
        tag: "¡Vení a nuestro local para adquirirlos!",
    },
    {
        route: "/accesorios",
        title: "Accesorios",
        tag: "¡Vení a nuestro local para adquirirlos!",
    },
    {
        route: "/lentes-contacto",
        title: "Lentes de contacto",
        tag: "¡Vení a nuestro local para adquirirlos!",
    },
    {
        route: "/contacto",
        title: "Ubicación y redes",
        tag: "¡Pasá por nuestro local!",
    },
];

export const articlesInfo: ArticlesInfo[] =[
    {
        imgUrl: "/assets/images/arlyt-express.png",
        imgAlt: "Arlyt multiuso o multiproposito",
        title: "Arlyt Express",
        desc: "Líquido multipropósito estéril e isotónica para todo tipo de lentes de contactos blandas. Limpiadora, desinfectante, conservadora, humectante y de enjuage.",
        size: "60ml, 120ml, 240ml, 360ml, 500ml"
    },
    {
        imgUrl: "/assets/images/arlyt-rgp.png",
        imgAlt: "Arlyt RGP multiuso o multiproposito",
        title: "Arlyt RGP",
        desc: "Líquido multipropósito para lentes de contacto rígidas y gas permeable. Limpiadora, desinfectante, conservadora, humectante y de enjuage.",
        size: "120ml"
    },
    {
        imgUrl: "/assets/images/optifree.png",
        imgAlt: "Optifree multiuso o multiproposito",
        title: "Optifree Express",
        desc: "Líquido multipropósito. Limpia, enjuaga, desinfecta, humecta y conserva.",
        size: "120ml, 300ml"
    },
    {
        imgUrl: "/assets/images/renu.png",
        imgAlt: "Renu multiuso o multiproposito",
        title: "Renu Fresh",
        desc: "Líquido multipropósito. Desinfecta, remueve proteinas, lentes frescos y cómodos.",
        size: "120ml, 355ml"
    },
    {
        imgUrl: "/assets/images/arlyt-salina.jpg",
        imgAlt: "Solución fisiológica",
        title: "Solución Salina",
        desc: "Solución fisiológica. Enjuague especial para lentes de contacto. Limpia, desinfecta y conserva los lentes de contacto",
        size: "500ml"
    },
    {
        imgUrl: "/assets/images/arlyt-fresh.png",
        imgAlt: "Arlyt fresh",
        title: "Arlyt Fresh",
        desc: "Solución hidratante para lentes de contacto. Refresca, limpia, desinfecta, conserva, elimina gérmenes y bacterias que puedan causar infecciones.",
        size: "15ml"
    },
    {
        imgUrl: "/assets/images/arlyt-lubricante.png",
        imgAlt: "Arlyt lubricante",
        title: "Arlyt Lubricante",
        desc: "Solución para la lubricación de los ojos y las lentes. Lubrica la superficie de la lente y mantiene la hidratación durante las horas de uso.",
        size: "15ml"
    },
]

export const socialMedia: SocialMedia[] = [
    {
        url: "https://api.whatsapp.com/send?phone=5493492281954",
        label: "WhatsApp",
        imgUrl: "/assets/icons/social-media/whatsapp.png",
        otherClasses: " bg-green-600 hover:bg-green-800 "
    },
    {
        url: "https://www.instagram.com/merloptica/",
        label: "Instagram",
        imgUrl: "/assets/icons/social-media/instagram.png",
        otherClasses: " bg-red-600 hover:bg-red-800 "
    },
    {
        url: "https://www.facebook.com/MerloOptica/",
        label: "Facebook",
        imgUrl: "/assets/icons/social-media/facebook.png",
        otherClasses: " bg-blue-600 hover:bg-blue-800 "
    },
];

export const marcas: Marcas[] = [
    {
        imgUrl: "/assets/images/logos-marcas/why-not.png",
        label: "Why Not?",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/reef.png",
        label: "Reef",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/vulk.png",
        label: "Vulk",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/rusty.png",
        label: "Rusty",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/muaa.png",
        label: "Muaa",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/mistral.png",
        label: "Mistral",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/hang-loose.png",
        label: "Hang Loose",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/ay-not-dead.png",
        label: "Ay Not Dead",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/e7.png",
        label: "E7",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/uptown.png",
        label: "Uptown",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/ossira.png",
        label: "Ossira",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/alberta-ferretti.png",
        label: "Alberta Ferretti",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/las-oreiro.png",
        label: "Las Oreiro",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/phancolor.png",
        label: "Phancolor",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/prune.png",
        label: "Prüne",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/karun.png",
        label: "Karün",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/wanama.png",
        label: "Wanama",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/ona-saez.png",
        label: "Ona Saez",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/prototype.png",
        label: "Prototype",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/rodenstock.png",
        label: "Rodenstock",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/vondel-park.png",
        label: "Vondel Park",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/mormaii.png",
        label: "Mormaii",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/mira-flex.png",
        label: "Mira Flex",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/union-pacific.png",
        label: "Union Pacific",
        link: "",
    },
    {
        imgUrl: "/assets/images/logos-marcas/tiffany.png",
        label: "Tiffany",
        link: "",
    },
];
