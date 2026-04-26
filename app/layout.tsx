import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MegaNav from "@/components/MegaNav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
  title: "CORMEX - Fabricación y comercialización de Cizallas, Dobladoras, Cortadoras y Punzonadoras",
  description:
    "Cormex - Distribuidores autorizados de cizallas, dobladoras, cortadoras y punzonadoras industriales en México.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <TopBar />
        <Header />
        <MegaNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <SocialSidebar />
      </body>
    </html>
  );
}
