import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// 👇 AQUÍ defines la fuente
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Oalex Web",
  description: "Sitio profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${manrope.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
