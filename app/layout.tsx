import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Anton } from "next/font/google"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// 👇 AQUÍ defines la fuente
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})
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
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className={`${manrope.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
