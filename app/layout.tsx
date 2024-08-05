import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Optica Merlo",
    description:
        "Optica en Rafaela, Santa Fe con más de 65 años de experiencia.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-slate-200`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
