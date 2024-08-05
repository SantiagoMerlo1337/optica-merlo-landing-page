export interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined };
}

export interface NavbarLink {
    route: string;
    label: string;
}

export interface HeaderInfo {
    route?: string;
    title: string;
    desc?: string;
    imgUrl?: string;
    tag: string;
}

export interface SocialMedia {
    url: string;
    label: string;
    imgUrl: string;
}

export interface Marcas {
    imgUrl: string;
    label: string;
    link?: string;
}
