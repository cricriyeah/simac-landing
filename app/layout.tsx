import type { Metadata } from "next";
import { Georama, Spline_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIMAC: Energía Solar, Refrigeración y Proyectos Eléctricos en BCS",
  description: "Diseño e instalación de Paneles Solares, Climatización Industrial y Proyectos Eléctricos. Más de 15 años de experiencia en Baja California Sur.",
  icons: {
    icon: "/logos/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${georama.variable} ${splineSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
